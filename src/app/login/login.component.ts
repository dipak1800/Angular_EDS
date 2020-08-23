import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  constructor(private fb: FormBuilder) {}
  LoginForm = this.fb.group({
    userName: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  ngOnInit(): void {}
}
