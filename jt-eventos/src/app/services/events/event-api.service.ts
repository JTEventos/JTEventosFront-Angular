import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/classes/events/event';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class EventApiService {
  baseApi = 'http://localhost:3001/api/event';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseApi);
  }

  findById(id: number) {
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.baseApi, event, httpOptions);
  }

  updateEvent(id: number, event: Event) {
  }

  deleteEvent(id: number) {
  }
}
