import { Pipe, PipeTransform } from '@angular/core';
import { conf } from '../global-config/config';

@Pipe({
  name: 'textTrimmer'
})
export class TextTrimmerPipe implements PipeTransform {

  TRIMLENGTH:number = conf.textTrimLength || 18;

  transform(str: string, trimLength:number=this.TRIMLENGTH): string {
    return (str.length <= trimLength) ? str : `${str.substring(0, trimLength)}…`;
  }

}
