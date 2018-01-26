import { Product } from '../Classes/product';
import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
  name: 'namefilter'
})
export class NameFilterPipe implements PipeTransform {
  transform(allProducts: Product[], term1: string) {
    if (term1) {
      return allProducts.
        filter(product => product.name.includes(term1));
    } else {
      return allProducts.
        filter(product => product);
    }
  }
}  


