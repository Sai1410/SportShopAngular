import { ListOrder } from '../Classes/listOrder';
import { Product } from '../Classes/product';
import { Injectable } from '@angular/core';
import { ProductsComponent } from '../Components/products/products.component';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Order } from '../Classes/order';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    .set('Authorization', 'my-auth-token')
};

@Injectable()
export class BagService {
  
  baseUrlOrders = 'http://localhost:5000/order';
  order: Order[];
  
  constructor(private http: HttpClient) {}

  getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrlOrders);
  }
  
  sumProducts(order: Order[]): number {
    return order.length;
  }
  
  sumPrice(order: Order[]): number {
    let sum = 0;
    if (order) {
      for (const o of order) {
        sum = sum + o.price;
      }
    }
    return sum;
  }
  
  addItem(product: Product): Observable<Order> {
    const temp = new Order(null, product.name, product.price);
    
    return this.http.post<Order>(this.baseUrlOrders, temp, httpOptions);
  }
  
  getListOfOrder(order: Order[]): ListOrder[] {
    const list: ListOrder[] = [];
    let addItem: number;
    for (const o of order){
      addItem = 1;
      for (const l of list){
        if (o.name === l.name) {
          l.amount = l.amount + 1;
          l.sum = l.amount * l.price;
          addItem = 0;
        }
      }
      if (addItem === 1) {
        list.push(new ListOrder(o.name, 1, o.price, o.price));
      }
    }
    return list;
  }
  
  removeItemFromList(o: ListOrder, list: ListOrder[]): ListOrder[] {
    let i = 0;
    for (const x of list) {
      
      if (x.name === o.name) {
        x.amount = x.amount - 1;
        x.sum = x.price * x.amount;
        if (x.amount === 0) {
          list.splice(i, 1);
        }
        return list;
      }
      i++;
    }
  }
  
  removeItem(o: ListOrder, order: Order[]): Observable<Order> {
    
    let id = '';
    for (const x of order) {
      if (o.name === x.name) {
        id = x._id;
        break;
      }
    }
    const url = `${this.baseUrlOrders}/${id}`;
    return this.http.delete<Order>(url, httpOptions);
  }
  
  removeOrder(): Observable<Order> {
    
    return this.http.delete<Order>(this.baseUrlOrders, httpOptions);
  }
  
}
