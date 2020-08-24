import { UserAuthenticationService } from './user-authentication.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthGuard implements CanActivate {
  constructor(private _authenticate: UserAuthenticationService) {}
  canActivate() {
    if (localStorage.getItem('email') !== null) {
      return true;
    } else {
      return false;
      window.alert('You are not allowed to route directly 🌝');
    }
  }
}
