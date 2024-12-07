import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['loginUser']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate', 'navigateByUrl']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [LoginComponent],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with username and password controls', () => {
    expect(component.formLogin.contains('username')).toBeTrue();
    expect(component.formLogin.contains('password')).toBeTrue();
  });

  it('should call loginUser from UserService and navigate to /home on successful login', () => {
    const mockResponse = [{ id: 1, username: 'testuser', password: 'testpass' }];
    userService.loginUser.and.returnValue(of(mockResponse));

    component.formLogin.setValue({ username: 'testuser', password: 'testpass' });
    component.Login();

    expect(userService.loginUser).toHaveBeenCalledWith('testuser', 'testpass');
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should show an alert if loginUser returns an empty response', () => {
    spyOn(window, 'alert');
    userService.loginUser.and.returnValue(of([]));

    component.formLogin.setValue({ username: 'wronguser', password: 'wrongpass' });
    component.Login();

    expect(window.alert).toHaveBeenCalledWith('Invalid username or password.');
  });

  it('should show an alert if loginUser fails', () => {
    spyOn(window, 'alert');
    userService.loginUser.and.returnValue(throwError(() => new Error('Login failed')));

    component.formLogin.setValue({ username: 'testuser', password: 'testpass' });
    component.Login();

    expect(window.alert).toHaveBeenCalledWith('Error during login. Please try again.');
  });

  it('should navigate to register page on Register button click', () => {
    component.Register();
    expect(router.navigateByUrl).toHaveBeenCalledWith('register');
  });
});
