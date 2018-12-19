import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import { WeatherModule } from './weather/weather.module';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './core/weather.service';
import { CoreModule } from './core/core.module';

@NgModule({
    imports:      [ BrowserModule,HttpClientModule, WeatherModule,CoreModule ],
    declarations: [ AppComponent ],
    providers: [ WeatherService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
