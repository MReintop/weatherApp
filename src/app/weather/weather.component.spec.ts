import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement}from '@angular/core';


import { WeatherComponent } from './weather.component';
import { WeatherModule } from './weather.module';
import { WeatherService } from '../core/weather.service';

describe('WeatherComponent', () => {
    let component: WeatherComponent;
    let fixture: ComponentFixture<WeatherComponent>;
    let de : DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[WeatherModule],
        providers:[WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    de = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', ()=>{
      expect(component).toBeTruthy();
  });

  it('coordinates should be 0', ()=>{
      expect(component.coords.longitude).toBe(0);
      expect(component.coords.latitude).toBe(0);
  });

  it('should capitalize first letter of input',()=>{
     const result=component.capitalize('test');
      expect(result).toBe('Test');
  });

  it('should capitalize first letter of input and lowercase everything else',()=>{
     const result=component.capitalize('tEsT');
     expect(result).toBe('Test');
  });

 it('should toggle celcius variable',()=>{
     expect(component.celcius).toBeTruthy();
     component.changeOnCheckBox();
     expect(component.celcius).toBeFalsy();
 })
});
