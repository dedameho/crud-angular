import { LoginService } from '../login/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public auth: LoginService, public router: Router) { }
  canActivate() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/'])
      return false
    } else {
      return true;
    }

  }

}

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(public auth: LoginService, public router: Router) { }
  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['login'])
      return false
    } else {
      return true;
    }

  }

}
