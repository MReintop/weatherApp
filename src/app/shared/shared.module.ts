import { NgModule } from '@angular/core';

import { kelvinToCelciusPipe } from './kelvinToCelcius.pipe';
import { kelvinToFarenheitPipe } from './kelvinToFarenheit.pipe';
import { capitalizePipe } from './capitalize.pipe';

@NgModule({
    declarations: [ kelvinToCelciusPipe, kelvinToFarenheitPipe,capitalizePipe ],
    exports: [ kelvinToCelciusPipe, kelvinToFarenheitPipe,capitalizePipe ]
})

export class SharedModule { }
