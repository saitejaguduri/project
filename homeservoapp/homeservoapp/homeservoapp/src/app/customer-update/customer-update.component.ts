import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  familyCount: number;
  customerId: number;
  customerDetails: any;

  constructor(private customerService: CustomerService, private router : Router ) {
    this.name = '';
    this.email = '';
    this.password = '';
    this.phoneNumber = '';
    this.familyCount = 0;
    this.customerId = 1; // Set the appropriate customer ID
  }

  ngOnInit() {
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    this.customerService.getCustomerDetails(this.customerId).subscribe(
      (customerData) => {
        this.customerDetails = customerData;
      },
      (error) => {
        console.error('Failed to fetch customer details', error);
      }
    );
  }

  onSubmit() {
    // Prepare the data to update
    const updatedData = {
      id: this.customerId,
      name: this.name,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber,
      familyCount: this.familyCount
    };

    // Call the service to update customer details
    this.customerService.updateCustomerDetails( updatedData).subscribe(
      

      // (response) => {
      //   console.log('Vendor details updated successfully');
      // },
      // (error) => {
      //   console.error('Failed to update vendor details', error);
      // }
      {next: response => {
        // this.customer=response.data
        console.log('Data updated successfully')
      },
         
         error : error =>{console.log('Customer details updated successfully' )
         this.router.navigate(['\customer-home'])
        //  this.customer = error.error.data
        }
      }
    );
    
  }
}
