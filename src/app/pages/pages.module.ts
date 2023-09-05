import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { NgChartsModule } from 'ng2-charts';

//Modules
import { ComponentsModule } from '../components/components.module';
import { ShareModule } from '../shared/share.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { InventoryModule } from './inventory/inventory.module';
import { PurchaseModule } from './purchases/purchase.module';
import { QuotationModule } from './quotations/quotation.module';


// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    PerfilComponent,
  ],
  exports:[
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
    UsuariosModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    InventoryModule,
    PurchaseModule,
    QuotationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
