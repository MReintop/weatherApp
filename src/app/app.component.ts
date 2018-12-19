import { Component, OnInit } from '@angular/core';

import { WeatherComponent } from './weather/weather.component';
@Component({
  selector: 'app-root',
  template: `
    <app-weather></app-weather>
  `
})//></app-customers>
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }

}
