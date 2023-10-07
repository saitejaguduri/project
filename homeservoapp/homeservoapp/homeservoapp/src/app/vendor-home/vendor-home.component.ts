import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.css']
})
export class VendorHomeComponent implements OnInit {

vendor : any = {};    // Change to 'vendor' instead of 'vendorDetails'

  constructor( private vendorService: VendorService,
    private route: ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
  
  }
  redirectToUpdatePage() {
    console.log('Navigating to update page...');
    this.router.navigate(['/vendor-update']); // Navigate to the "update" route
  }
  
  redirectToDetails(){
    console.log('Getting details');
    this.router.navigate(['/vendor-details']);
  }

  redirectToDeleteDetails() {
    const vendorId = localStorage.getItem('vendorId');

    this.vendorService.deleteVendorDetails(Number(vendorId)).subscribe(details => {
    console.log('deleted');
   
       });
       this.router.navigate(['/vendor-login']);
    }     
}
