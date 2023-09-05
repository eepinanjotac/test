import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Model
import { Purchase } from 'src/app/models/purchases/purchase.model';

//Service

import { PurchaseService } from 'src/app/services/purchases/purchase.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styles: [
  ]
})
export class PurchasesComponent implements OnInit{
  public purchases: Purchase[]=[];
  public cargando: boolean = true;

  constructor(
    private purchaseService: PurchaseService,
    private router: Router
  ){

  }
  ngOnInit(): void {
      this.cargarPurchases();
  }
  cargarPurchases() {
    this.cargando = true;
      this.purchaseService.cargarPurchases()
        .subscribe(purchases => {
          this.purchases = purchases;
          console.log(purchases)
          this.cargando = false;
        });
    }

}
