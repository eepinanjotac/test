import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PerfilComponent } from './perfil/perfil.component';

import { RolesComponent } from './usuarios/roles/roles.component';
import { UsersComponent } from './usuarios/users/users.component';
import { UserComponent } from './usuarios/users/user.component';

import { CategoriesComponent } from './inventory/categories/categories.component';
import { ProductsComponent } from './inventory/products/products.component';
import { UnitsComponent } from './inventory/units/units.component';
import { IvaComponent } from './purchases/iva/iva.component';
import { ProvidersComponent } from './purchases/providers/providers.component';
import { ClientsComponent } from './quotations/clients/clients.component';
import { GroupsClientsComponent } from './quotations/groups-clients/groups-clients.component';
import { ImportClientsComponent } from './quotations/import-clients/import-clients.component';
import { ImportProvidersComponent } from './purchases/import-providers/import-providers.component';
import { ImportInventoryComponent } from './inventory/import-inventory/import-inventory.component';
import { PurchasesComponent } from './purchases/purchases/purchases.component';
import { QuotationsComponent } from './quotations/quotations/quotations.component';
import { ProductComponent } from './inventory/products/product.component';
import { PurchaseComponent } from './purchases/purchases/purchase.component';



const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        canActivate :[AuthGuard],
        children: [
            { path: '', component: DashboardComponent, data:{titulo:'Dashboard'} },
            {path: 'rxjs', component: RxjsComponent, data:{titulo:'Rxjs'}},
            {path: 'promesas', component: PromesasComponent, data:{titulo:'Promesas'}},
           
            /* Perfil */ 
            {path: 'account-settings', component: AccountSettingsComponent, data:{titulo:'Configuración Ususario'}},
            {path: 'perfil', component: PerfilComponent, data:{titulo:'Perfil Usuario'}},
           
            /* Users */
            {path: 'roles', component: RolesComponent, data:{titulo:'Roles'}},
            {path: 'users', component: UsersComponent, data:{titulo:'Usuarios'}},
            {path: 'user/:id', component: UserComponent, data:{titulo:'Usuarios'}},
           
            /* Inventory */
            {path: 'inventory/categories', component: CategoriesComponent, data:{titulo:'Categorías'}},
            {path: 'inventory/products', component: ProductsComponent, data:{titulo:'Productos'}},
            {path: 'inventory/product', component: ProductComponent, data:{titulo:'Nuevo Producto'}},
            {path: 'inventory/units', component: UnitsComponent, data:{titulo:'Unidades'}},
            {path: 'inventory/import-products', component: ImportInventoryComponent, data:{titulo:'Importar Productos'}},

            /* Purchases */
            {path: 'purchase/iva', component: IvaComponent, data:{titulo:'Iva'}},
            {path: 'providers', component: ProvidersComponent, data:{titulo:'Proveedores'}},
            {path: 'providers/import', component: ImportProvidersComponent, data:{titulo:'Importar Proveedores'}},
            {path: 'purchases', component: PurchasesComponent, data:{titulo:'Compras'}},
            {path: 'purchase', component: PurchaseComponent, data:{titulo:'Nueva Compra'}},


            /* Quotations */
            {path: 'quotations', component: QuotationsComponent, data:{titulo:'Proformas'}},
            {path: 'clients', component: ClientsComponent, data:{titulo:'Clientes'}},
            {path: 'clients/groups', component: GroupsClientsComponent, data:{titulo:'Grupo de Clientes'}},
            {path: 'clients/import', component: ImportClientsComponent, data:{titulo:'Importar Clientes'}},

         
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


