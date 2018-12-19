export interface ICityData{
    id: number;
    name: string;
    country: string;
    coord: any[];
}

export interface IForecast{
    id:number;
    datetime:Date;
    temperatureKelvin:number;
    main:string;
}

export interface ICoords{
    longitude:number;
    latitude:number;
}
