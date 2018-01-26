import { Injectable } from '@angular/core';
import { Product } from '../Classes/product';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categories } from '../Classes/categories';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    .set('Authorization', 'my-auth-token')
};

function inCategories(value: String): boolean {
  for (const c of Categories) {
    if (value === c) {
      return true;
    }
  }
  return false;
}

@Injectable()
export class ProductService {
   baseUrlProducts = 'http://localhost:5000/products';
   constructor(private http: HttpClient) {}
  
  
   getProducts(): Observable<Product[]> {
     return this.http.get<Product[]>(this.baseUrlProducts);
   }
   
  addItem(product: Product): Observable<Product> {
    const temp = new Product(null, product.name, product.category, product.description, product.price, product.image_path);
    
    return this.http.post<Product>(this.baseUrlProducts, temp, httpOptions);
  }
   
   getPages(category: string, products: Product[], min: number, max: number, name: string): number[] {
      let sumPage = 0;
      if (min == null || min.toString() === '') {
        min = 0;
      }
      if (max == null || max.toString() === '') {
        max = 999999999999;
      }
      
      for (const p of products) {
        if (name == null) {
          if ((category === p.category || category === 'Main Page') && 
            (p.price >= min && p.price <= max)) {
            sumPage = sumPage + 1;
          } else if ((category === 'Other' && inCategories(p.category) === false) && 
            (p.price >= min && p.price <= max)) {
            sumPage = sumPage + 1;
            console.log(p.category);
          }
        } else {
          if ((category === p.category || category === 'Main Page') && 
            (p.price >= min && p.price <= max) &&
            p.name.includes(name)) {
              sumPage = sumPage + 1;
          } else if ((category === 'Other' && inCategories(p.category) === false) && 
            (p.price >= min && p.price <= max) &&
            p.name.includes(name)) {
            sumPage = sumPage + 1;
          }
        }

      }
      return Array(Math.ceil(sumPage / 3)).fill(1).map((x, i) => i + 1);
  }
  
  removeItem(product: Product): Observable<Product> {
    
    const id = product._id;
    const url = `${this.baseUrlProducts}/${id}`;
   
    return this.http.delete<Product>(url, httpOptions);
  }
  
  editItem(product: Product): Observable<any> {
    return this.http.put(this.baseUrlProducts, product, httpOptions);
  }
  
}
