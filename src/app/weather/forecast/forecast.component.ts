import { Component, OnInit,Input } from '@angular/core';

import { IForecast,ICityData,ICoords } from '../../shared/interfaces';
import { WeatherService } from '../../core/weather.service';


@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: [  './forecast.component.css','../../../styles/css/weather-icons.css','../../../styles/css/weather-icons.min.css']
})
export class ForecastComponent implements OnInit {

    @Input()deg:boolean;
    @Input()coords:  ICoords;
    days:IForecast[]=[];
    temperatureAvgKelvin:number;
    constructor( private weatherService: WeatherService) { }
    today:number;

    ngOnInit(){
         this.weatherService.getWeatherFromAPI(this.coords.longitude, this.coords.latitude).subscribe((weatherData:any)=>{
                this.today= + weatherData.list[0].dt_txt.slice(8,10);
                this.getForecasts(weatherData);
            });

    }

    getForecasts(weatherData){
        for(let i=0; i<weatherData["list"].length;i++){
            let currentDay= +weatherData.list[i].dt_txt.slice(8,10);
            let currentHour= +weatherData.list[i].dt_txt.slice(11,13);

            if(currentDay!=this.today && currentHour==12){
                let weatherObject : IForecast = {
                "id": weatherData.list[i].dt,
                "datetime":weatherData.list[i].dt_txt,
                "temperatureKelvin": weatherData.list[i].main.temp,
                "main":"wi wi-day-"+weatherData.list[i].weather[0].main.toLowerCase()
                };
                this.days.push(weatherObject);
            }
        }
    }
 }



