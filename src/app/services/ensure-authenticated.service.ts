import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class EnsureAuthenticated implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): boolean {
      const loged_in = true;
      if (loged_in) {
        return true;
      } else {
        this.router.navigate(['/UserPanel']); 
        return false;
      }
      
  }
}
