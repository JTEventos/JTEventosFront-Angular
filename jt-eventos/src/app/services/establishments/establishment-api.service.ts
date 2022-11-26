import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establishment } from 'src/app/classes/establishments/establishment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class EstablishmentApiService {
  baseApi = 'http://localhost:3001/api/establishment';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(this.baseApi);
  }

  findById(id: number) {
  }

  createEstablishment(establishment: Establishment): Observable<Establishment> {
    return this.http.post<Establishment>(this.baseApi, establishment, httpOptions);
  }

  updateEstablishment(id: number, establishment: Establishment) {
  }

  deleteEstablishment(id: number) {
  }
}
