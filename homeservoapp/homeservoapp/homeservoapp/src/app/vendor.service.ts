import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private baseUrl = 'http://localhost:8080'; // Update with your actual backend URL

  constructor(private http: HttpClient) {}

  registerVendor(formData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/vendor`, formData);
  }
 
  login(credentials: any): Observable<any> {
    // Send a POST request to your backend for login
    return this.http.post(`${this.baseUrl}/vendorlogin`, credentials);
  }
  
  getVendorDetails(vendorId : number): Observable<any> {
    console.log(`${this.baseUrl}/vendor?id=${vendorId}`);
    return this.http.get(`${this.baseUrl}/vendor?id=${vendorId}`);
  }

  updateVendorDetails( formData: any): Observable<any> {
    const url = `${this.baseUrl}/updatevendor`;
    return this.http.put(url, formData);

}
deleteVendorDetails(vendorId : number) : Observable<any>{
  return this.http.delete(`${this.baseUrl}/deletevendor?ven_id=${vendorId}`);
}
}
