
import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
  vendor: any = {}; // Initialize an empty object to store customer details

  constructor(private vendorService: VendorService, private router: Router) {}

  ngOnInit(): void {
    this.getVendorDetails();
  }


  getVendorDetails(): void {
    const vendorId = localStorage.getItem('vendorId');
    
    if (vendorId !== null) {
      const vendorIdNumber = Number(vendorId); // Convert to a number
  
      if (!isNaN(vendorIdNumber)) {
        // Check if the conversion was successful
        this.vendorService.getVendorDetails(vendorIdNumber).subscribe(
          
          {next: response => {
            this.vendor=response.data
            console.log(this.vendor)
          },
             
             error : error =>{
              console.log('Error fetching vendor details:', error)
              this.vendor = error.error.data
            }
          }
        );
      } else {
        // Handle the case where the 'vendorId' is not a valid number
        alert('Invalid vendor ID in local storage.');
        this.router.navigate(['/vendor-login']);
      }
    } else {
      // Handle the case where 'vendorId' is null
      alert('vendor ID not found in local storage.');
      this.router.navigate(['/vendor-login']);
    }
  }
 
}
