import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-update',
  templateUrl: './vendor-update.component.html',
  styleUrls: ['./vendor-update.component.css']
})
export class VendorUpdateComponent implements OnInit {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
  costPerDay : number;
  vendorId: number;
  vendorDetails: any;

  constructor(private vendorservice : VendorService, private router : Router ) {
    this.name = '';
    this.email = '';
    this.password = '';
    this.phoneNumber = '';
    this.role = '';
    this.costPerDay=0;
    this.vendorId = 0;
    this.vendorDetails; // Set the appropriate customer ID
  }

  ngOnInit() {
    this.getVendorDetails();
  }

  getVendorDetails() {
    const vendorId = localStorage.getItem('vendorId');
    this.vendorservice.getVendorDetails(Number(vendorId)).subscribe(
          
      {next: response => {
        this.vendorDetails=response.error.data
        console.log(response.error.data.id)
      },
         
         error : error =>{
          console.log('Error fetching vendor details:', error)
          this.vendorDetails = error.error.data
        }
      }
    );
  }
  onSubmit() {
    // Prepare the data to update
    const updatedData = {
      id: this.vendorId,
      name: this.name,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber,
      role: this.role,
      costPerDay: this.costPerDay,
    };

    // Call the service to update customer details
    this.vendorservice.updateVendorDetails( updatedData).subscribe(
      // (response) => {
      //   console.log('Customer details updated successfully');
      // },
      // (error) => {
      //   console.error('Failed to update customer details', error);
      // }

      {next: response => {
       // this.vendorId=response.data
        console.log('Data updated successfully')
      },
         
         error : error =>{console.log('vendor details not updated' )
         this.router.navigate(['\vendor-home'])
       //  this.vendorId = error.error.data
        }
      }
    );
    
  }
}



