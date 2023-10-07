import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-getdetails',
  templateUrl: './customer-getdetails.component.html',
  styleUrls: ['./customer-getdetails.component.css']
})
export class CustomerGetDetailsComponent implements OnInit {
  customer: any = {}; // Initialize an empty object to store customer details

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.getCustomerDetails();
  }


  getCustomerDetails(): void {
    const customerId = localStorage.getItem('customerId');
    
    if (customerId !== null) {
      const customerIdNumber = parseInt(customerId, 10); // Convert to a number
  
      if (!isNaN(customerIdNumber)) {
        // Check if the conversion was successful
        this.customerService.getCustomerDetails(customerIdNumber).subscribe(
        
          { next: response => {
            this.customer=response.data
            console.log(this.customer)
          },
             
             error : error =>{console.log('Error fetching customer details:', error)
             this.customer = error.error.data
            }
          }
        );
      } else {
        // Handle the case where the 'customerId' is not a valid number
        alert('Invalid customer ID in local storage.');
        this.router.navigate(['/customer-login']);
      }
    } else {
      // Handle the case where 'customerId' is null
      alert('Customer ID not found in local storage.');
      this.router.navigate(['/customer-login']);
    }
  }
 
}
