import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-homepage',
  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.css']
})

export class CustomerHomepageComponent implements OnInit {

    customer: any = {}; // Change to 'customer' instead of 'customerDetails'

    constructor(
      private customerService: CustomerService,
      private route: ActivatedRoute,
      private router: Router
    ) { }

    ngOnInit(): void {
      // Initialize 'customer' if needed
    }

    redirectToUpdatePage() {
      console.log('Navigating to update page...');
      this.router.navigate(['/customer-update']); // Navigate to the "update" route
    }
    redirectToGetDetails() {
      console.log('Navigating to update page...');
      this.router.navigate(['/customer-getdetails']); // Navigate to the "update" route
    }

    redirectToDeleteDetails() {
      const customerId = localStorage.getItem('customerId');

      this.customerService.deleteCustomerDetails(Number(customerId)).subscribe(details => {
      console.log('deleted');
     
         });
         this.router.navigate(['/customer-login']);
      }     
   }
