import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    const charArr: string[] = (value === null ? '' : value).padEnd(10).split('');
    charArr[0] = '+1(' + charArr[0];
    charArr[2] += ') ';
    charArr[5] += '-';

    return charArr.join('');
  }
}
