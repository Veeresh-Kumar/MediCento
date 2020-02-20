import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private auth: AuthService, private router: Router) { }
  canActivate(): boolean {
    if(this.auth.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/sign-in']);
    return false;

  }
}
