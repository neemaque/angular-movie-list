import { Component, inject } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private httpClient: HttpClient) {}

  private userService = new UserService(this.httpClient);
  router = inject(Router);
  
  formRegister = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  Register(): void {
    const newUser = {
      username: this.formRegister.value.username,
      password: this.formRegister.value.password,
    };
  
    this.userService.registerUser(newUser).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        alert('User registered successfully!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Registration failed:', err);
        alert('Error during registration. Please try again.');
      },
    });
  }
}
