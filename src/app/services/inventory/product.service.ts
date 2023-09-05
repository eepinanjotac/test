
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

import { Product } from 'src/app/models/inventory/product.model';

// API
import { environment } from 'src/environments/environment';

// Variable para la API 
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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


  cargarProducts(){
    ///quotation/clients
    const url=`${base_url}/inventory/products`;
    return this.http.get(url, this.headers)
    .pipe(
      delay(400),
      map((resp :{ok:boolean, products: Product[]}
      ) => resp.products)
    )
  }

  createProduct(product) {
    const url = `${base_url}/inventory/products`;
    return this.http.post(url, product, this.headers);
  }
}
