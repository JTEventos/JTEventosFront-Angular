import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/users/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

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

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseApi, user, httpOptions);
  }

  updateUser(id: number, user: User): Observable<User> {
    const uri = `${this.baseApi}/${id}`;
    return this.http.put<User>(uri, uri, httpOptions);
  }
}
