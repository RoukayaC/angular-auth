// login.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };
  message: string | undefined;

  constructor(private http: HttpClient) {}

  onLogin() {
    this.http.post('http://localhost:3000/api/users/login', this.user)
      .subscribe(
        (response: any) => {
          this.message = 'Login successful!';
          localStorage.setItem('token', response.token);
        },
        (error) => {
          this.message = error.error.message || 'Login failed. Please try again.';
        }
      );
  }
}
