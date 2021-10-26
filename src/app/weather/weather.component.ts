import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  private weatherURL='https://www.el-tiempo.net/api/json/v2/provincias/';
  
  searchControl=new FormControl();
  weather?: string;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(switchMap(city=>this.getWeather(city)),
    ).subscribe(
      res =>{
        this.weather = `Current temperature is ${res.ciudades[0].temperatures.max}`
    },
    err=>{
      this.weather = `Error consultando la ciudad por error ${err.message}`;
      console.log(`Can't get weather. Error code: %s, URL: %s`, err.message, err.url);
    },()=>{console.log("wooooo")}
    
    );
  }
  getWeather(city: string): Observable<any> {
    let codProvincia='0';
    if(city === 'Almeria'){
      codProvincia='04';
    }else if(city === 'Madrid'){
      codProvincia='28';
    }
    return this.httpClient.get(this.weatherURL+codProvincia).pipe(
      catchError(err => {
        if(err.status===500){
          console.log(`City ${city} not found`);
        }
        return EMPTY; //Observable.empty YA NO EXISTE
        //Lanznado EMPTY no se entra por la gestion de error pero no se desconecta del observable
        //Si lanzamos throwError(err) entonces entrará por la gestion de error del subscribe padre pero se desregistra todos los observables
      }))
  }

}
