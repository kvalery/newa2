import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simplePipe'
})
export class SimplePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    for (var i = 0; i < value.length; i++) {
      let newValue = value[i]
      newValue = '***' + newValue + "***"
    }

    return  value
  }
}
