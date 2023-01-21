import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipe implements PipeTransform {
  transform(value: string, limit: number) {
    let result = value;
    if (value.length > limit) {
      result = value.substring(0, limit) + '...';
    }
    return result;
  }
}
