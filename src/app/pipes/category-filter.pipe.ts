import { Product } from '../Classes/product';
import { Pipe, PipeTransform } from '@angular/core';
import { Categories } from '../Classes/categories';

function inCategories(value: String): boolean {
  for (const c of Categories) {
    if (value === c) {
      return false;
    }
  }
  return true;
}

@Pipe({
  name: 'categoryfilter'
})
  
  
export class CategoryFilterPipe implements PipeTransform {
  transform(allProducts: Product[], term: string) {
    if (term === 'Main Page') {
      return allProducts.filter(product => product);
    } else if (term === 'Other') {
        return allProducts.filter(product => inCategories(product.category));
    } else { 
      return allProducts.filter(product => (product.category === term));
    }                                                               
  }
}  
