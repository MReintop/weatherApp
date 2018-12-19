import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './weather.service';


@NgModule({
    imports: [ HttpClientModule ],
    providers: [ WeatherService ]
})
export class CoreModule { }
