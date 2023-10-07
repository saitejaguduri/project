import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.css']
})
export class VendorRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  registrationSuccess = false;
  registrationError: string | null = null;

  constructor(private formBuilder: FormBuilder, private vendorService: VendorService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.pattern(/^\d{10}$/)]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]+$/)]],
        role: ['', [Validators.required]],
        costPerDay: [null, [Validators.min(0)]], // Initialize to null
        address: this.formBuilder.group({
          dno: ['', [Validators.required]],
          street: ['', [Validators.required]],
          landmark: ['', [Validators.required]],
          district: ['', [Validators.required]],
          state: ['', [Validators.required]],
          pincode: [null, [Validators.min(0)]], // Initialize to null
        })
      });
      
  }

  onSubmit() {
    console.log(JSON.stringify(this.registrationForm.value))
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value; // Use .value to get the form data.

      this.vendorService.registerVendor(formData).subscribe(
       {next : response => {
          console.log(response);
          this.registrationSuccess = true;
          this.registrationError = null;
        },
        error :error => {
          console.error(error);
          this.registrationSuccess = false;
          this.registrationError = 'Error registering the vendor.';
        }
       } );
    } else {
      this.registrationSuccess = false;
      this.registrationError = 'Please correct the errors in the form.';
    }
  }
}