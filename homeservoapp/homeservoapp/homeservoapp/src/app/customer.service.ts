import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080'; // Update with your actual backend URL

  constructor(private http: HttpClient) {}

  // Ensure you have a registerCustomer method
  registerCustomer(formData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/customer`, formData);
  }

  getCustomerDetails(customerId:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer?cus_id=${customerId}`);
  }
 
  updateCustomerDetails( formData: any): Observable<any> {
    const url = `${this.baseUrl}/updatecustomer`;
    return this.http.put(url, formData);

}


deleteCustomerDetails(customerId : number) : Observable<any>{
  return this.http.delete(`${this.baseUrl}/customer?cus_id=${customerId}`);
}
}