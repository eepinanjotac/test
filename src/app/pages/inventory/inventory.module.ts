import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { UnitsComponent } from './units/units.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ImportInventoryComponent } from './import-inventory/import-inventory.component';
import { ProductComponent } from './products/product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoriesComponent,
    UnitsComponent,
    ProductsComponent,
    ImportInventoryComponent,
    ProductComponent
  ],
  exports:[
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InventoryModule { }
