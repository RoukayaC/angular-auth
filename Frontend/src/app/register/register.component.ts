import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
    role: '',
  };
  message: string | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http
      .post('http://localhost:3000/api/users/register', this.user)
      .subscribe(
        (response: any) => {
          this.message = response.message;
          // Clear the user form
          this.user = { username: '', email: '', password: '', role: '' };

          // Redirect to the login page after successful registration
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error during registration:', error);
          this.message =
            error.error.message || 'An error occurred during registration.';
        }
      );
  }
}
