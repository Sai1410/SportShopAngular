import { UserOrder } from '../Classes/UserOrder';
import { Product } from '../Classes/product';
import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
  name: 'realizedfilter'
})
export class RealizedFilterPipe implements PipeTransform {
  transform(allUsers: UserOrder[], term1: boolean) {
    if (term1) {
      return allUsers.
        filter(order => order.realized === true);
    } else {
      return allUsers.
        filter(order => order.realized === false);
    }
  }
}  


