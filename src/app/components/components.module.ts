import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonaComponent } from './dona/dona.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    DonaComponent
  ], exports:[DonaComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
