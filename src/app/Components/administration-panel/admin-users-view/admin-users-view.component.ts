import { User } from '../../../Classes/User';
import { UserOrder } from '../../../Classes/UserOrder';
import { ListOrder } from '../../../Classes/listOrder';
import { Order } from '../../../Classes/order';
import { AdminPanelService } from '../../../services/admin-panel.service';
import { BagService } from '../../../services/bag.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin-users-view',
  templateUrl: './admin-users-view.component.html',
  styleUrls: ['./admin-users-view.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [AdminPanelService]
})
export class AdminUsersViewComponent implements OnInit {
  
  usersOrders: UserOrder[] = [];
  orderDetail: UserOrder;
  listDetail: ListOrder[] = [];
  showOrderDetails = false;
  View = 0;
  constructor(private adminPanelService: AdminPanelService, private bagService: BagService) { }

  ngOnInit() {
    this.getUsers();
  }
  
  getUsers(): void {
    this.adminPanelService.getUsers().subscribe(usersOrders => this.usersOrders = usersOrders);
  }
  
  getOrderSum(userOrder: UserOrder): number {
    let sum = 0;
    for (const o of userOrder.order) {
      sum = sum + o.price;
    }
    return sum;
  }
  
  showDetails(userOrder: UserOrder): void {
    this.orderDetail = userOrder;
    this.listDetail = this.bagService.getListOfOrder(userOrder.order);
    this.showOrderDetails = true;
  }
  
  moveToUnrealized(name: string): void {
    for (const o in this.usersOrders) {
      if (this.usersOrders[o].name === name) {
        this.usersOrders[o].realized = false;
      }
    }
    this.showOrderDetails = false;
  }

  moveToRealized(name: string): void {
    for (const o in this.usersOrders) {
      if (this.usersOrders[o].name === name) {
        this.usersOrders[o].realized = true;
      }
    }
    this.showOrderDetails = false;
  }
}
