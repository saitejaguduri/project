import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; // Import your components here
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component'; // Import your vendor registration component
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorUpdateComponent } from './vendor-update/vendor-update.component';
import { VendorWorksComponent } from './vendor-works/vendor-works.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerHomepageComponent } from './customer-homepage/customer-homepage.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { FormsModule } from '@angular/forms';
import { CustomerGetDetailsComponent } from './customer-getdetails/customer-getdetails.component';
import { CustomerService } from './customer.service';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vendor-registration', component: VendorRegistrationComponent }, 
  {path: 'vendor-login',component: VendorLoginComponent},
  { path: 'vendor-home', component: VendorHomeComponent }, // Add this line for the vendor home pa
  { path: 'vendor-details', component: VendorDetailsComponent},
  { path: 'vendor-update', component: VendorUpdateComponent},
  { path: 'vendor-works', component: VendorWorksComponent},
  { path: 'customer-registration', component: CustomerRegistrationComponent},
  { path: 'customer-login', component: CustomerLoginComponent},
  { path: 'customer-home', component: CustomerHomepageComponent }, // Replace 'CustomerHomeComponent' with your actual component name
  { path: 'customer-registration', component: CustomerRegistrationComponent }, // Add this line for customer registration
  { path: 'customer-update', component: CustomerUpdateComponent},
  {path : 'customer-getdetails',component: CustomerGetDetailsComponent},


];

@NgModule({
  imports: 
         [RouterModule.forRoot(routes),
          FormsModule,
  
         ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
