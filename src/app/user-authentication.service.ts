import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  constructor() {}
  validateEmailAndPassword(email, password) {
    if (email == 'EDS@gmail.com' && password == '123456789') {
      localStorage.setItem('email', email);
      return true;
    } else {
      return false;
    }
  }
}
