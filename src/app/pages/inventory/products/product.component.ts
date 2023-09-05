import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//model
import { Product } from 'src/app/models/inventory/product.model';
import { Categorie } from 'src/app/models/inventory/categorie.model';
import { Unit } from 'src/app/models/inventory/unit.model';
import { Iva } from 'src/app/models/purchases/iva.model';

//Service
import { ProductService } from 'src/app/services/inventory/product.service';
import { CategorieService } from 'src/app/services/inventory/categorie.service';
import { UnitService } from 'src/app/services/inventory/unit.service';
import { IvaService } from 'src/app/services/purchases/iva.service';


import Swal from 'sweetalert2';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})

export class ProductComponent implements OnInit {

  //Modelos 
  public categories: Categorie[] = [];
  public units: Unit[] = [];
  public ivas: Iva[] = [];


  public productForm: FormGroup;
  public price: number;
  public newPrice: number;
  
  //Guardar los precios
  public prices: { value: number }[] = [];

  // Modelo products
  public sku: string;
  public name: string;
  public description: string;
  public specifications: string;
  public id_category: number;
  public pur_price: number;
  public id_iva: number;
  public id_unit: number;
  public mini_stock: number;
  public stock: number;




  constructor(
    private productService: ProductService,
    private categorieService: CategorieService,
    private unitService: UnitService,
    private ivaService: IvaService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.cargarCategories();
    this.cargarIvas();
    this.cargarUnits();

  }

  addPrice() {
    if (this.newPrice) {
      this.prices.push({ value: this.newPrice });
      this.newPrice = null;
    }
  }

  removePrice(index: number) {
    this.prices.splice(index, 1);
  }

  

  createProduct() {
    const product = {
      sku: this.sku,
      name: this.name,
      description: this.description,
      specifications: this.specifications,
      pur_price: this.pur_price,
      id_category: this.id_category,
      id_unit: this.id_unit,
      id_iva: this.id_iva,
      mini_stock: this.mini_stock,
      stock: this.stock,
      prices: this.prices.map(price => price.value)
    };
    console.log(product);

    this.productService.createProduct(product)
      .subscribe(
        response => {
          console.log(response);
          // Realiza las acciones necesarias después de crear el producto
        },
        error => {
          console.error(error);
          // Realiza las acciones necesarias en caso de error
        }
      );
  }



  cargarCategories() {
    this.categorieService.cargarCategories()
      .subscribe(categories => {
        this.categories = categories;
        console.log(categories)
      });
  }

  cargarUnits() {
    this.unitService.cargarUnits()
      .subscribe(units => {
        this.units = units;
      });
  }

  cargarIvas() {
    this.ivaService.cargarIva()
      .subscribe(ivas => {
        this.ivas = ivas;
        console.log(ivas)
      });
  }



}
