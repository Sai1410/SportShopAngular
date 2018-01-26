import { AdminPanelService } from './admin-panel.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class EnsureAuthenticatedAdminService implements CanActivate {

  constructor(private adminPanelService: AdminPanelService, private router: Router) {}
  canActivate(): boolean {
      const loged_in = true;
      if (loged_in) {
        return true;
      } else {
        this.router.navigate(['/AdminPanelAuthenticate']); 
        return false;
      }
      
  }
}
