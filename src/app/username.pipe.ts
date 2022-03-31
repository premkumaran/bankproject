import { Pipe, PipeTransform } from '@angular/core';
import { Details } from './details';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: Details[], text:string): Details[] {
    let Filters: Details[] = [];
    
    for (let index = 0; index < value.length; index++) {
      if (value[index].Username && value[index].Username.toLowerCase().indexOf(text.toLowerCase()) >= 0) {
        Filters.push(value[index]);
        
      }
     
    }
    return Filters;
    
  }
  

}
