import { Component, OnInit,Input } from '@angular/core';

import { IForecast } from '../../../shared/interfaces';


@Component({
    selector: 'app-listforecast',
    templateUrl: './listforecast.component.html',
    styleUrls: [ './listforecast.component.css' ]
})
export class ListForecastComponent implements OnInit {

    @Input() timeOfDay : IForecast;
    @Input() temp : boolean;
    @Input() main : string;

    constructor() {}
    ngOnInit(){}
}
