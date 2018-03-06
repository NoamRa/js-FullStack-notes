import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTrimmer'
})
export class TextTrimmerPipe implements PipeTransform {

  transform(value: string): string {
    const TRIMLENGTH=29;
    return (value.length > TRIMLENGTH) ? value.substring(0, TRIMLENGTH) + "…" : value
  }

}
