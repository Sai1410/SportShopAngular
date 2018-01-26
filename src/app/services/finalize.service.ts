import { Person } from '../Classes/Person';
import { UserOrder } from '../Classes/UserOrder';
import { Order } from '../Classes/order';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    .set('Authorization', 'my-auth-token')
};


@Injectable()
export class FinalizeService {
  baseUrlOrders = 'http://localhost:5000/usersOrders';
  constructor(private http: HttpClient) { }
  
  
  validateName(name: string): string {
    
    const validRegEx = /[^,\s] \W [^,\s]|\d/;
    if (validRegEx.test(name) || name == null || name === '') {
      return 'Insert proper name and surname';
    }
  }
  
  validateAddress(address: string): string {
  if (address == null || address === '') {
        return 'Insert proper name and surname';
      }
  }
  
  addOrder(person: Person, order: Order[]): Observable<UserOrder> {
    const temp = new UserOrder(null, person.name, person.surname, person.address, order, false);
    console.log('here');
    return this.http.post<UserOrder>(this.baseUrlOrders, temp, httpOptions);
  }
}
