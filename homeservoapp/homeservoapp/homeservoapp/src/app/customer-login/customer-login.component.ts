
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
  email: string = '';
  password: string = '';
  loginError: boolean = false; // Variable to track login errors

  constructor(private customerService: CustomerService, private router: Router) {}

  // Implement your email validation logic here
  emailIsValid(): boolean {
    // Check if the email is not empty and matches a basic email pattern
    if (this.email.trim() === '') {
      return false; // Email should not be empty
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(this.email);
  }

  // Implement your password validation logic here
  passwordIsValid(): boolean {
    // Check if the password is not empty and meets certain criteria
    if (this.password.trim() === '') {
      return false; // Password should not be empty
    }

    // Add your password criteria here, for example, minimum length and complexity
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(this.password);
    const hasLowerCase = /[a-z]/.test(this.password);
    const hasDigit = /\d/.test(this.password);
    const hasSpecialChar = /[!@#$%^&*]/.test(this.password);

    return (
      this.password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigit &&
      hasSpecialChar
    );
  }

  onSubmit(): void {
    // Validate email and password
    if (!this.emailIsValid() || !this.passwordIsValid()) {
      this.showErrorAlert('Invalid credentials. Please check your email and password.');
      return;
    }

    // Send login request to the backend
    // Example fetch request:
    fetch(`http://localhost:8080/customerlogin?email=${this.email}&password=${this.password}`)
      .then(response => {
        if (response.status === 404) {
          // Handle 404 error (Invalid credentials)
          this.showErrorAlert('Invalid credentials. Please check your email and password.');
        }
        return response.json();
      })
      .then(data => {
        if (data.status === 302) {
          // Login successful, perform necessary actions
          localStorage.setItem('customerId',data.data.id)
          this.router.navigate(['/customer-home']); // Redirect to customer home page
        } else {
          // Login failed, show error alert
          this.showErrorAlert('Login failed. Please try again.');
        }
      })
      .catch(error => {
        // Handle other errors during login
        console.error('Error during login:', error);
        this.showErrorAlert('An error occurred. Please try again later.');
      });
  }

  // Function to show a simple JavaScript alert with the error message
  showErrorAlert(errorMessage: string): void {
    alert(errorMessage);
  }
}