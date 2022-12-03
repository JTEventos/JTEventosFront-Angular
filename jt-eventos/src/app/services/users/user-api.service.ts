import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/classes/users/user';

let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  baseApi = 'http://localhost:3001/api/user';

  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseApi);
  }

  findById(id: number): Observable<User> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.get<User>(uri);
  }

  createUser(user: User): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.baseApi, user, { headers, observe: 'response' }).pipe(map((res => res)));
  }

  updateUser(id: number, user: User): Observable<HttpResponse<any>> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.put<any>(uri, user, { headers, observe: 'response' }).pipe(map((res => res)));
  }
}
