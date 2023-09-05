import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IvaComponent } from './iva/iva.component';
import { ProvidersComponent } from './providers/providers.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { ImportProvidersComponent } from './import-providers/import-providers.component';



@NgModule({
  declarations: [
    IvaComponent,
    ProvidersComponent,
    PurchasesComponent,
    ImportProvidersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PurchaseModule { }
