import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { CustomerComponent } from './components/customer/customer.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' }, // Default route
  { path: 'index', component: IndexComponent },
  // { path: 'sign-up', component: SignUpComponent }, 
  // {path: 'sign-in',component: SignInComponent},
  {path: 'vendor', component : VendorComponent },
  {path : 'customer', component: CustomerComponent} // Add this line for the vendor home pa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
