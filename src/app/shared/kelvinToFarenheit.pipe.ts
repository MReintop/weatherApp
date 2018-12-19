import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'kelvinToFarenheit' })
export class kelvinToFarenheitPipe implements PipeTransform {
    transform(value: any) {
        if (value) {
            return value * (9/5) -459.67;
        }
        return value;
    }
}
