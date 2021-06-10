import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nutrientWeight',
})
export class NutrientWeightPipe implements PipeTransform {
  transform(value: string | undefined, ...args: unknown[]): any {
    if (value) {
      return (Math.round(parseFloat(value) * 10) / 10 ).toString();
    }
    let trasformedValue = 0
    if (value) {
      trasformedValue = Math.round(parseFloat(value) * 10) / 10 ;
    }
    return trasformedValue
  }
}
