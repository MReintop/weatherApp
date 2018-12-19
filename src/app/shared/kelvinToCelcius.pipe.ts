import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'kelvinToCelcius' })
export class kelvinToCelciusPipe implements PipeTransform {
    transform(value: any) {
        if (value) {
            return value - 273.15;
        }
        return value;
    }
}
