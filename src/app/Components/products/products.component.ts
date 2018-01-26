import { BagService } from '../../services/bag.service';
import { Categories } from '../../Classes/categories';
import { Order } from '../../Classes/order';
import { Product } from '../../Classes/product';
import { ProductService } from '../../services/product.service';
import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ProductService, BagService ]
  
})
export class ProductsComponent implements OnInit {
  
  categories = Categories;
  products: Product[];
  selectedCategory = 'Main Page';
  pages: number[];
  order: Order[];
  sumPrice = 0;
  sumProducts = 0;
  pageNumber = 1;
  amountOfProducts = 0;
  minPrice: number;
  maxPrice: number;
  inputName: string;
  productDetails: Product;
  
  constructor(private productService: ProductService, private bagService: BagService) {
  }
  
  ngOnInit(): void {
    
    this.getOrder();
    this.getProducts();
    this.productService.getProducts()
      .subscribe(products => this.pages = Array(Math.ceil(products.length / 3)).fill(1).map((x, i) => i + 1));
    this.bagService.getOrder()
      .subscribe(order => this.sumProducts = this.bagService.sumProducts(order));
    this.bagService.getOrder()
      .subscribe(order => this.sumPrice = this.bagService.sumPrice(order));
    
  }
  
  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  onSelect(category: string): void {
    this.selectedCategory = category;
    this.getPages();
    this.pageNumber = 1;
  }
  
  addItem(product: Product): void {
    this.bagService.addItem(product)
      .subscribe(order => this.order.push(order));
    this.sumProducts = this.sumProducts + 1;
    this.sumPrice = this.sumPrice + product.price;
  }
  
  nextPage(page: number): void {
    this.pageNumber = page;
  }

  getOrder(): void {
    this.bagService.getOrder()
      .subscribe(order => this.order = order);
  }
  
  getPages(): void {
      this.pages = this.productService.getPages(this.selectedCategory, this.products, this.minPrice, this.maxPrice, this.inputName); 
  }
  
  assignProductDetails(product: Product) {
    this.productDetails = product;
  }
 }

