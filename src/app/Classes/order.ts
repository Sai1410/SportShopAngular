export class Order {
  _id: string;
  name: string;
  price: number;
  
  constructor(id: string, name: string, price: number) { 
    this._id = id;
    this.name = name;
    this.price = price;
  }
}
