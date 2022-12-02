import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventType } from 'src/app/classes/event-types/event-type';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

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

  createEventType(eventType: EventType): Observable<EventType> {
    return this.http.post<EventType>(this.baseApi, eventType, httpOptions);
  }

  updateEventType(id: number, eventType: EventType): Observable<EventType> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.put<EventType>(uri, eventType, httpOptions);
  }

  deleteEventType(id: number): Observable<EventType> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.delete<EventType>(uri);
  }
}
