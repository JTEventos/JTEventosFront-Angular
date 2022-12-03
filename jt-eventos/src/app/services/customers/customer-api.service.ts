import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customer } from 'src/app/classes/customers/customer';

let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {
  baseApi = 'http://localhost:3001/api/customer';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseApi);
  }

  findById(id: number): Observable<Customer> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.get<Customer>(uri);
  }

  createCustomer(customer: Customer): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.baseApi, customer, { headers, observe: 'response' }).pipe(map((res => res)));
  }

  updateCustomer(id: number, customer: Customer): Observable<HttpResponse<any>> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.put<any>(uri, customer, { headers, observe: 'response' }).pipe(map((res => res)));
  }

  deleteCustomer(id: number): Observable<HttpResponse<any>> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.delete<any>(uri, { headers, observe: 'response' }).pipe(map((res => res)));
  }
}
