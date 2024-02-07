import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buy',
  standalone: true
})
export class BuyPipe implements PipeTransform {

  transform(productname:string): string {
    return `buy ${productname}`;
  }

}
