import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { WeatherComponent } from './weather.component';
import { HttpClientModule } from '@angular/common/http';
import { TodayComponent } from './today/today.component';
import { ForecastComponent } from './forecast/forecast.component';
import { ListForecastComponent } from './today/list-forecast/listforecast.component';

@NgModule({
    imports:[ SharedModule,CommonModule, FormsModule, HttpClientModule ],
    declarations: [ ListForecastComponent,WeatherComponent,TodayComponent,ForecastComponent ],
    exports: [ WeatherComponent ]
})

export class WeatherModule{}
