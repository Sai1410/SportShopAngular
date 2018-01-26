import { UserData } from '../../../Classes/userData';
import { AdminPanelService } from '../../../services/admin-panel.service';
import { AuthService } from '../../../services/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    .set('Authorization', 'my-auth-token')
};


@Component({
  selector: 'app-admin-panel-authenticate',
  templateUrl: './admin-panel-authenticate.component.html',
  styleUrls: ['./admin-panel-authenticate.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [AdminPanelService]
})


export class AdminPanelAuthenticateComponent implements OnInit {
  baseUrlProducts = 'http://localhost:5000/login';
  userData = new UserData ('', '');
  message = '';
  constructor(private adminPanelService: AdminPanelService, private http: HttpClient, private router: Router) {}

  
  ngOnInit() {
  }

  authenticate(): void {
    if (this.adminPanelService.validate(this.userData.login, this.userData.password)) {
       this.router.navigate(['/AdministrationPanel']); 
    } else {
      this.message = 'Wrong Login or Password';
    }
  }
  
}
