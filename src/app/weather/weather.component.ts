
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { WeatherService } from '../core/weather.service';
import { ICoords, ICityData } from '../shared/interfaces';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: [ './weather.component.css' ]
})
export class WeatherComponent implements OnInit {
    coords:ICoords = {"longitude":0, "latitude":0}; //{"longitude":24.753531, "latitude":59.436958};
    location:string;
    cityName:string="";
    celcius:boolean=true;
    errorMessage:string=" ";
    cityCurrentTime:string;
    constructor( private weatherService: WeatherService) { }

    ngOnInit() {
    }

    onBack(){
        this.coords={"longitude":0, "latitude":0};

    }

    changeOnCheckBox(){
        this.celcius=!this.celcius;
    }


    //Getting coordinates by city name
    getUserCoordinatesByCityName(){
        this.errorMessage=" ";
        let capitalizedCityName=this.capitalize(this.location);
        this.weatherService.getCityData(capitalizedCityName).subscribe((cityData:ICityData)=>{
            if(cityData){
                this.cityName=cityData.name;
                this.coords.longitude=cityData.coord["lon"];
                this.coords.latitude = cityData.coord["lat"];
            }else{
                this.errorMessage="Please enger a valid city name.";
            }
         });

    }


    //Getting user current coordinates
    getUserCoordinates(){
         if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.coords.latitude=position.coords.latitude;
                this.coords.longitude=position.coords.longitude;
                this.cityName="Current Location";

            },
            error => {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            }
        );
    };
    }


    capitalize(cityName:string){
          return cityName.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

    }
}

