
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';


//Modelo

import { Client } from 'src/app/models/inventory/client.model';

// API
import { environment } from 'src/environments/environment';

// Variable para la API 
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor( private  http: HttpClient) { 

  }


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


  cargarClients(){
    ///quotation/clients
    const url=`${base_url}/quotation/clients`;
    return this.http.get(url, this.headers)
    .pipe(
      delay(400),
      map((resp :{ok:boolean, clients: Client[]}
      ) => resp.clients)
    )
  }
  
}
