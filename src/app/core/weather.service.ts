import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';


import { ICityData } from '../shared/interfaces'
;
@Injectable()
export class WeatherService {
    apiKey= 'fb04c66a704016dae226c2e0268c7262';
    baseUrl: string = '../../assets/';
    url = 'http://api.openweathermap.org/data/2.5/forecast?lat=';
    constructor(public http: HttpClient) {}

    //  to city details by city name
   getCityData(city:string): Observable<ICityData>{
        return this.http.get<ICityData[]>(this.baseUrl+'city.list.json')
        .pipe(
            map(cities=>{
                let cityData=cities.filter((cityObj)=>cityObj.name === city);
                return (cityData && cityData.length) ? cityData[0] : null;
            }),
            catchError(this.handleError)
            )
    }

    //Get weather by longitude and latitude
    getWeatherFromAPI(lon:number,lat:number): Observable<any>{
        return this.http.get(this.url + lat +'&lon='+lon+ '&appid=' + this.apiKey)
            .pipe(
                catchError(this.handleError));
      }

    //to get city time
    getLocalTime(cityLon:number,cityLat:number){
        return this.http.get<any[]>("http://api.geonames.org/timezoneJSON?lat="+cityLat+"&lng="+cityLon+"&username=mreintop")
            .pipe(catchError(this.handleError));
    }

    //error handling
    private handleError(error:any){
        console.error('server error: ',error);
        if(error.error instanceof Error){
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Server error');
    }
}
