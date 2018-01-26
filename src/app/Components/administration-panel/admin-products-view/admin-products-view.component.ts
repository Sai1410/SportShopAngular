import { Product } from '../../../Classes/product';
import { ProductService } from '../../../services/product.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin-products-view',
  templateUrl: './admin-products-view.component.html',
  styleUrls: ['./admin-products-view.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ProductService]
})
export class AdminProductsViewComponent implements OnInit {
  addNewProductsPanel: number;
  products: Product[];
  productTemp: Product = {_id : '', name : '', description: '', category: '', price: 0, image_path: ''};
  editProductFlag = 0;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
    this.addNewProductsPanel = 0;
  }
  
  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }
  
  addProduct(productTemp) {
    this.productService.addItem(productTemp)
      .subscribe(product => this.products.push(product));
    this.addNewProductsPanel = 0;
    this.productTemp = {_id : '', name : '', description: '', category: '', price: 0, image_path: ''};
  }
  
  removeProduct(product: Product) {
    this.productService.removeItem(product).subscribe();
    this.getProducts();
  }
  
  editProduct(product: Product) {
    this.editProductFlag = 0;
    this.productService.editItem(product).subscribe();
    this.productTemp = {_id : '', name : '', description: '', category: '', price: 0, image_path: ''};
  }
}
