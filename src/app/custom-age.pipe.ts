import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customAge',
})
export class CustomAgePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value && value + ' ' + 'years old';
  }
}
