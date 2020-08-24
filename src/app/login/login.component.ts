import { UserAuthenticationService } from './../user-authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: '.app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  get userName() {
    return this.LoginForm.get('userName');
  }
  get password() {
    return this.LoginForm.get('password');
  }
  constructor(
    private fb: FormBuilder,
    private _authService: UserAuthenticationService,
    private _route: Router
  ) {}
  LoginForm = this.fb.group({
    userName: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  ngOnInit(): void {}
  handleAuthentication(email, password) {
    console.log(email, password);
    let isUserValidated = this._authService.validateEmailAndPassword(
      email,
      password
    );
    if (isUserValidated) {
      this._route.navigate(['/employees']);
    } else {
      window.alert('Please Enter Correct E-mail and Password');
    }
  }
}
