import { Pipe, PipeTransform } from '@angular/core';
import { Invoice } from './invoice';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Invoice[], text:string): Invoice[] {
    let Filter: Invoice[] = [];
    
      for (let index = 0; index < value.length; index++) {
        if (value[index].Date && value[index].Date.indexOf(text) >= 0) {
          Filter.push(value[index]);
          
        }
        
      }
    return Filter;
    }


}
