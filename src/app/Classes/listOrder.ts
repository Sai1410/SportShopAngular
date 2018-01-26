export class ListOrder {
  
  name: string;
  amount: number;
  price: number;
  sum: number;
  
  constructor(name: string, amount: number, price: number, sum: number) { 
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.sum = sum;
  }
}
