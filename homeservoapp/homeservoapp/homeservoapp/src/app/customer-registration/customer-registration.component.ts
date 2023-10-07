import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css'],
})
export class CustomerRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  registrationSuccess = false;
  registrationError: string | null = null;

  constructor(private fb: FormBuilder, private customerService: CustomerService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
        ],
      ],
      familyCount: [0, [Validators.min(0)]],
      doorNumber: [''],
      street: [''],
      landmark: [''],
      district: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      this.customerService.registerCustomer(formData).subscribe(
        (response) => {
          this.registrationSuccess = true;
          this.registrationError = null;
        },
        (error) => {
          this.registrationSuccess = false;
          this.registrationError = 'Error registering the customer.';
        }
      );
    } else {
      this.registrationSuccess = false;
      this.registrationError = 'Please correct the errors in the form.';
    }
  }
}