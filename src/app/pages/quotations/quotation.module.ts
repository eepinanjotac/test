import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationsComponent } from './quotations/quotations.component';
import { ClientsComponent } from './clients/clients.component';
import { GroupsClientsComponent } from './groups-clients/groups-clients.component';
import { ImportClientsComponent } from './import-clients/import-clients.component';



@NgModule({
  declarations: [
    QuotationsComponent,
    ClientsComponent,
    GroupsClientsComponent,
    ImportClientsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuotationModule { }
