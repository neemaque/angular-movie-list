import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrlUsers = 'https://67535910f3754fcea7bb8264.mockapi.io/api/v2/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrlUsers);
  }
  loginUser(username: string, password: string): Observable<any> {
    return this.http.get(`${this.apiUrlUsers}?username=${username}&password=${password}`);
  }
  registerUser(user: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrlUsers}`, user);
  }
}
