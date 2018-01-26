export class Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image_path: string;
  
  constructor(id: string, name: string, category: string, description: string , price: number, image_path: string) { 
    this._id = id;
    this.name = name;
    this.category = category;
    this.description = description;
    this.price = price;
    this.image_path = image_path;
  }
}
