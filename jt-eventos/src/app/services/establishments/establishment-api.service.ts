import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Establishment } from 'src/app/classes/establishments/establishment';

let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class EstablishmentApiService {
  baseApi = 'http://localhost:3001/api/establishment';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(this.baseApi);
  }

  findById(id: number): Observable<Establishment> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.get<Establishment>(uri);
  }

  createEstablishment(establishment: Establishment): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.baseApi, establishment, { headers, observe: 'response' }).pipe(map((res => res)));
  }

  updateEstablishment(id: number, establishment: Establishment): Observable<HttpResponse<any>> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.put<any>(uri, establishment, { headers, observe: 'response' }).pipe(map((res => res)));
  }

  deleteEstablishment(id: number): Observable<HttpResponse<any>> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.delete<any>(uri, { headers, observe: 'response' }).pipe(map((res => res)));
  }
}
