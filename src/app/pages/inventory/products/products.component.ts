import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

//model
import { Product } from 'src/app/models/inventory/product.model';

//Service

import { ProductService } from 'src/app/services/inventory/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  public products: Product[]=[];
  public cargando: boolean = true;

  constructor( 
            private productService : ProductService,
            private router: Router
            ){}

  ngOnInit(): void {
    this.cargarProducts();
    
  }

  cargarProducts() {
    this.cargando = true;
      this.productService.cargarProducts()
        .subscribe(products => {
          this.products = products;
          console.log(products)
          this.cargando = false;
        });
    }

}
