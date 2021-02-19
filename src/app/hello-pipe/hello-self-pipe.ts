import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myword' })

export class MywordPie implements PipeTransform {
    
  transform(value: any, ...args: any[]) {
    if (args.length < 2) {
      args = ['[', ']'];
    }
    return args[0] + ' ' + value + ' ' + args[1];
  }
}
