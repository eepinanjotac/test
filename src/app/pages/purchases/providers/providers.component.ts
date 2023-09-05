import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Provider } from 'src/app/models/purchases/provider.model';
import { ProviderService } from 'src/app/services/purchases/provider.service';



@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styles: [
  ]
})
export class ProvidersComponent implements OnInit{

  public providers: Provider[]=[];
  public cargando: boolean = true;


  constructor(private providerService: ProviderService){

  }
  ngOnInit(): void {
    this.cargarProviders();
    
  }

  cargarProviders() {
    this.cargando = true;
      this.providerService.cargarProviders()
        .subscribe(providers => {
          this.providers = providers;
          console.log(providers)
          this.cargando = false;
        });
    }


}
