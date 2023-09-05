
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

//Model
import { Purchase } from 'src/app/models/purchases/purchase.model';

// API
import { environment } from 'src/environments/environment';

// Variable para la API 
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

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

  cargarPurchases(){
    //inventory/categories
    const url=`${base_url}/purchase`;
    return this.http.get(url, this.headers)
    .pipe(
      delay(400),
      map((resp :{ok:boolean, purchases: Purchase[]}
      ) => resp.purchases)
    )
  }

}
