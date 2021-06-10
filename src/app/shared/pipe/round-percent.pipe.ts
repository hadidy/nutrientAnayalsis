import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundPercent'
})
export class RoundPercentPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): any {
    let trasformedValue = 0
    if (value) {
      trasformedValue = Math.ceil(parseFloat(value));
    }
    return trasformedValue
  }

}
