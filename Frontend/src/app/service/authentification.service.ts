import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { catchError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private apiUrl = 'http://localhost:3000/api/users';
  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }
  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  updateUser(id: string, userData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, userData);
  }
  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post('http://localhost:3000/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
