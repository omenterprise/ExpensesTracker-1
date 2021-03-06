import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  isUserLoggedIn: boolean = false;

  redirectUrl: string;

  onLoginSuccess = function () {
    this.isUserLoggedIn = true;
    if (!this.redirectUrl) {
      this.router.navigate(['/']);
    }
    else {
      this.router.navigate([this.redirectUrl]);
    }
  }

  onLoginFailure = function () {
    this.isUserLoggedIn = false;
  }

  onLogOut = function () {
    this.isUserLoggedIn = false;
    this.router.navigate(['/Login']);
  }
}
