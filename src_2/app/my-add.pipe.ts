import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

transform(a: number, b : number)
  {
     let sum = a+b;
     return sum;
  }
  

}
