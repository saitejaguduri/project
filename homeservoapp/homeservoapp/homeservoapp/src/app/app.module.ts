import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component'; // Import the VendorLoginComponent here
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { VendorWorkListComponent } from './vendor-work-list/vendor-work-list.component';
import { VendorUpdateComponent } from './vendor-update/vendor-update.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorWorksComponent } from './vendor-works/vendor-works.component';
import { CustomerHomepageComponent } from './customer-homepage/customer-homepage.component';
import { CustomerGetDetailsComponent } from './customer-getdetails/customer-getdetails.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    VendorRegistrationComponent,
    VendorLoginComponent, // Add VendorLoginComponent to the declarations
    VendorHomeComponent,
    VendorWorkListComponent,
    VendorUpdateComponent,
    CustomerRegistrationComponent,
    CustomerLoginComponent,
    VendorDetailsComponent,
    VendorWorksComponent,
    CustomerHomepageComponent,
    CustomerGetDetailsComponent,
    CustomerUpdateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, // Add ReactiveFormsModule
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
