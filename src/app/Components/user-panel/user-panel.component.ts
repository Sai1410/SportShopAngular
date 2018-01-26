import { UserData } from '../../Classes/userData';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    .set('Authorization', 'my-auth-token')
};

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserPanelComponent implements OnInit {
  
  baseUrlProducts = 'http://localhost:5000/users';
  userData = new UserData ('', '');
  
  constructor(private auth: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  authenticate(): void {
    const url = '/users/login' + this.baseUrlProducts;
    this.http.post(url, this.userData,  httpOptions);
    if (true) {
      this.router.navigate(['/UserPanelView']); 
      
    }
  }
}
