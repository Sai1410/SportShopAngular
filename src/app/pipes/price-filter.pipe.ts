import { Product } from '../Classes/product';
import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
  name: 'pricefilter'
})
export class PriceFilterPipe implements PipeTransform {
  transform(allProducts: Product[], term1: number | null, term2: number | null) {
    if (term1 == null  || term1.toString() === '' ) {
      term1 = 0;
    }
    if (term2 == null  || term2.toString() === '' ) {
      term2 = 9999999999999999999;
    }
    return allProducts.
      filter(product => (product.price >= term1 && product.price <= term2));
    
  }
}  


