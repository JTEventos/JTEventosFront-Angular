import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Event } from 'src/app/classes/events/event';

let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class EventApiService {
  baseApi = 'http://localhost:3001/api/event';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseApi);
  }

  findById(id: number): Observable<Event> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.get<Event>(uri);
  }

  createEvent(event: Event): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.baseApi, event, { headers, observe: 'response' }).pipe(map((res => res)));
  }

  updateEvent(id: number, event: Event): Observable<HttpResponse<any>> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.put<any>(uri, event, { headers, observe: 'response' }).pipe(map((res => res)));
  }

  deleteEvent(id: number): Observable<HttpResponse<any>> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.delete<any>(uri, { headers, observe: 'response' }).pipe(map((res => res)));
  }
}
