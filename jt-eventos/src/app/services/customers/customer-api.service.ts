import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/classes/customers/customer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {
  baseApi = 'http://localhost:3001/api/customer';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseApi);
  }

  findById(id: number) {
  }

  createEventType(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseApi, customer, httpOptions);
  }

  updateEventType(id: number, customer: Customer) {
  }

  deleteEventType(id: number) {
  }
}
