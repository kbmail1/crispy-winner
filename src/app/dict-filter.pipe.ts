import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dictFilter'
})
export class DictFilterPipe implements PipeTransform {

  transform(value: {'synonyms':''}, ...args: unknown[]): unknown {
    return value!.synonyms
  }

}
