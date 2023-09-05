import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Pruebas',
      url: ('/login'),
      icono: 'mdi mdi-gauge',
      submenu :[
        {titulo:'Promesas', url: ('promesas')},
        {titulo:'Rxjs', url:('rxjs')}
      ]

    },
    {
      titulo: 'Usuarios',
      icono: 'mdi mdi-account-multiple',
      submenu :[
        
        {titulo:'Usuarios', url:('users')},
        {titulo:'Roles', url:('roles')},
      ]

    },
    {
      titulo: 'Contactos',
      icono: 'mdi mdi-account-box',
      submenu :[
        
        {titulo:'Clientes', url:('clients')},
        {titulo:'Grupos de Clientes', url:('clients/groups')},
        {titulo:'Proveedores', url:('providers')},
        {titulo:'Importar Clientes', url:('clients/import')},
        {titulo:'Importar Proveedores', url:('providers/import')},
      ]

    },
    {
      titulo: 'Productos',
      icono: 'mdi mdi-package-variant-closed',
      submenu :[
        
        {titulo:'Lista de productos', url:('inventory/products')},
        {titulo:'Agregar producto', url:('inventory/product')},
        {titulo:'Categoría', url:('inventory/categories')},
        {titulo:'Unidades', url:('inventory/units')},
        {titulo:'Importar', url:('inventory/import-products')},
      ]

    },
    {
      titulo: 'Compras',
      icono: 'mdi mdi-arrow-down-bold-circle-outline',
      submenu :[
        
        {titulo:'Lista de compras', url:('purchases')},
        {titulo:'Agregar compra', url:('purchase')},
        {titulo:'IVA', url:('purchase/iva')},
      ]

    },
    {
      titulo: 'Ventas',
      icono: 'mdi mdi-arrow-up-bold-circle-outline',
      submenu :[
        
        {titulo:'Generar APU', url:('')},
        {titulo:'Lista de APUs', url:('')},
        {titulo:'Crear proforma', url:('quotation')},
        {titulo:'Lista de proformas ', url:('quotations')},
        
      ]

    },
    {
      titulo: 'Reportes',
      icono: 'mdi mdi-file-pdf',
      submenu :[
        
        {titulo:'Productos', url:('')},
      ]

    }

    

  ]
  constructor() { }
}
