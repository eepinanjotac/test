import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

//import { tap } from 'rxjs';

// Model Rol
import { RolForm } from '../interfaces/rol-form.iterface';
import {Rol } from "../models/rol.model";

// API
import { environment } from 'src/environments/environment';

// Variable para la API 
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class RolService {


  constructor(private http: HttpClient) { }

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


cargarRoles(){
  const url = `${base_url}/roles`;

  return this.http.get(url, this.headers)
        .pipe(
          map((resp :{ok:boolean, roles: Rol[]}
          ) => resp.roles)
        )
}

crearRol(formData: RolForm) {
  return this.http.post(`${base_url}/roles`, formData);
}

updateRol(id: string ,formData: RolForm) {
  const url = `${base_url}/roles/${id}`;
  return this.http.put(url, formData, this.headers);
}

deleteRol(id: number) {
  const url = `${base_url}/roles/${id}`;
  return this.http.put(url, this.headers);
}

}