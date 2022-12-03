import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EventType } from 'src/app/classes/event-types/event-type';

let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class EventTypeApiService {
  baseApi = 'http://localhost:3001/api/eventType';

  constructor(private http: HttpClient) { }

  findAll(): Observable<EventType[]> {
    return this.http.get<EventType[]>(this.baseApi);
  }

  findById(id: number): Observable<EventType> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.get<EventType>(uri);
  }

  createEventType(eventType: EventType): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.baseApi, eventType, { headers, observe: 'response' }).pipe(map((res => res)));
  }

  updateEventType(id: number, eventType: EventType): Observable<HttpResponse<any>> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.put<any>(uri, eventType, { headers, observe: 'response' }).pipe(map((res => res)));
  }

  deleteEventType(id: number): Observable<HttpResponse<any>> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.delete<any>(uri, { observe: 'response' }).pipe(map((res => res)));
  }
}
