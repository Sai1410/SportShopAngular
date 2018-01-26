import { ListOrder } from '../../Classes/listOrder';
import { BagService } from '../../services/bag.service';
import { Order } from '../../Classes/order';
import { Product } from '../../Classes/product';
import { Component, OnInit, Input } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css'],
  providers: [ BagService ]
})
export class BagComponent implements OnInit {

  order: Order[] = [];
  sumPrice = 0;
  list: ListOrder[] = [];
  
  constructor(private bagService: BagService) {}
  
  ngOnInit() {
    this.getOrder();
    this.bagService.getOrder()
      .subscribe(order => this.sumPrice = this.bagService.sumPrice(order));
    this.bagService.getOrder()
      .subscribe(order => this.list = this.bagService.getListOfOrder(order));
  }

  getOrder(): void {
    this.bagService.getOrder()
      .subscribe(order => this.order = order);
  }
  
  removeItem(o: ListOrder): void {
    this.bagService.getOrder()
      .subscribe(order => this.bagService.removeItem(o, order).subscribe());
    this.list = this.bagService.removeItemFromList(o, this.list);
    this.sumPrice = this.sumPrice - o.price;
    
  }

}
