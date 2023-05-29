import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(a: number, b : number)
  {
     let product = a*b;
     return product;
  }
}
