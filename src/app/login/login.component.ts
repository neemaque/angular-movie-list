import { Component, inject } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private httpClient: HttpClient) {}

  private userService = new UserService(this.httpClient);
  router = inject(Router);

  
  formLogin = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  Login(){
    const username = this.formLogin.value.username;
    const password = this.formLogin.value.password;

    this.userService.loginUser(username, password).subscribe({
      next: (response) => {
        if (response && response.length > 0) {
          console.log('Login successful:', response[0]);
          this.router.navigate(['/home']);
        } else {
          alert('Invalid username or password.');
        }
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Error during login. Please try again.');
      },
  });
  }
  
  Register()
  {
    this.router.navigateByUrl('register');
  }

}
