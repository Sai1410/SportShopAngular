import { User } from '../Classes/User';
import { UserOrder } from '../Classes/UserOrder';
import { ListOrder } from '../Classes/listOrder';
import { Order } from '../Classes/order';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    .set('Authorization', 'my-auth-token')
};

@Injectable()
export class AdminPanelService {
  baseUrlUsers = 'http://localhost:5000/usersOrders';
  loged_in = false;
  constructor(private http: HttpClient) { }
  
   getUsers(): Observable<UserOrder[]> {
     
      return this.http.get<UserOrder[]>(this.baseUrlUsers);
   
   }
  
  validate(login: string, password: string): boolean {
     if (login === 'admin' && password === 'admin') {
        this.loged_in = true;
        return true;
     } else {
       this.loged_in = false;
       return false;
     }
  }
  
}
