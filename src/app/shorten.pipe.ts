import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'altEvenOdd',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, limit:number=1) {
    const result = [...value].reduce(
      (acc: string, crr: string, index: number) => {
        const next = index  < limit  ? crr?.toUpperCase() : crr?.toLowerCase();
        acc += next;
        return acc;
      },
      ''
    );

    console.log('result', result, [...value]);
    return result; //'rawendra'
  }
}
