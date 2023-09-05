
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

//MOdelo

import { Provider } from 'src/app/models/purchases/provider.model';


// API
import { environment } from 'src/environments/environment';

// Variable para la API 
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) {

  }


  get token(): string {
    return localStorage.getItem('token');
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }


  cargarProviders() {
    ///purchase/providers
    const url = `${base_url}/purchase/providers`;
    return this.http.get(url, this.headers)
      .pipe(
        delay(400),
        map((resp: { ok: boolean, providers: Provider[] }
        ) => resp.providers)
      )
  }
}
