import { Component, OnInit,Input } from '@angular/core';

import { ICityData, ICoords, IForecast} from '../../shared/interfaces';
import { WeatherService } from '../../core/weather.service';


@Component({
    selector: 'app-today',
    templateUrl: './today.component.html',
    styleUrls: [ './today.component.css','../../../styles/css/weather-icons.css','../../../styles/css/weather-icons.min.css' ]
})
export class TodayComponent implements OnInit {

    @Input()deg:boolean;
    @Input()coords: ICoords;
    weatherDetails:any;
    iconData:string;
    cityName:string;
    cityCurrentTime:string;
    weatherNow:number;
    dailyForecast:IForecast[]=[];

    constructor( private weatherService: WeatherService,) { }

    ngOnInit(){
        this.weatherService.getLocalTime(this.coords.longitude,this.coords.latitude).subscribe((cityTime:any)=>{
            this.cityCurrentTime=cityTime.time;
            this.cityName=cityTime.name;
            this.weatherService.getWeatherFromAPI(this.coords.longitude,this.coords.latitude).subscribe((weatherData:any)=>{
                //get current temperatura
                this.weatherNow=weatherData["list"][0].main.temp;
                let date = new Date(weatherData["list"][0].dt_txt);

                for(let i=0; i<weatherData["list"].length;i++){
                    let current= new Date(weatherData["list"][i].dt_txt);
                    if(date.getDate()==current.getDate()){
                            let object: IForecast={
                                "id":weatherData["list"][i].dt,
                                "datetime":current,
                                "temperatureKelvin":weatherData["list"][i].main.temp,
                                "main":weatherData["list"][i].weather[0].main
                            };
                            this.dailyForecast.push(object);
                     }
                 }

                 //get current weather description
                 this.weatherDetails=weatherData.list[0].weather;
                 //get class variable for icon sty
                 this.iconData=this.getIconData(weatherData["list"][0].weather[0].main.toLowerCase(),this.getTimeOfDay(this.cityCurrentTime));

             });

        });


    }


    getIconData(description:string, timeofday:string){
            return "wi wi-"+timeofday+"-"+description;
    }

    getTimeOfDay(time:string){
        let hour  = + time.slice(11,13);
        if(hour<6 || hour>21){
            return "night";
        }else{
            return "day";
        }
    }



}
