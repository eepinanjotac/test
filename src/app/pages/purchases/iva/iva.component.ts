import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Model

import { Iva } from 'src/app/models/purchases/iva.model';

//Service

import { IvaService } from 'src/app/services/purchases/iva.service';
@Component({
  selector: 'app-iva',
  templateUrl: './iva.component.html',
  styles: [
  ]
})
export class IvaComponent  implements OnInit{
  public ivas: Iva[]=[];
  public cargando: boolean = true;

  constructor(
    private ivaService: IvaService,
    private router: Router
  ){

  }
  ngOnInit(): void {
    this.cargarIvas();
  }

  cargarIvas() {
    this.cargando = true;
      this.ivaService.cargarIva()
        .subscribe(ivas => {
          this.ivas = ivas;
          console.log(ivas)
          this.cargando = false;
        });
    }

}
