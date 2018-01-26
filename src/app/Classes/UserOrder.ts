import { Order } from './order';
export class UserOrder {
  _id: string;
  name: string;
  surname: string;
  address: string;
  order: Order[];
  realized: boolean;
  
  constructor(id: string, name: string, surname: string, address: string, order: Order[], realized: boolean) { 
    this._id = id;
    this.name = name;
    this.surname = surname;
    this.address = address;
    this.order = order;
    this.realized = realized;
  }
}
