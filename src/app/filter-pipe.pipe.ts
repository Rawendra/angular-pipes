import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(items: any, filterString: string, propName: string): unknown {
    if (!filterString || items.length === 0) {
      return items;
    }

    const result = items.reduce((acc, crr) => {
      crr[propName].includes(filterString) && acc.push(crr);
      return acc;
    }, []);

    console.log('result-->', result);
    return result;
  }
}
