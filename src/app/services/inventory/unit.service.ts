import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

//Modelo
import { Unit } from 'src/app/models/inventory/unit.model';

// API
import { environment } from 'src/environments/environment';

// Variable para la API 
const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private  http: HttpClient) { }

  
  get token(): string {
    return localStorage.getItem('token');
  }
  
  get headers(){
    return {
       headers :{
        'x-token' : this.token
       }
    }
  }

  cargarUnits(){
    //inventory/units
    const url=`${base_url}/inventory/units`;
    return this.http.get(url, this.headers)
    .pipe(
      delay(400),
      map((resp :{ok:boolean, units: Unit[]}
      ) => resp.units)
    )
  }
}
