import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Model

import { Categorie } from 'src/app/models/inventory/categorie.model';

//Service

import { CategorieService } from 'src/app/services/inventory/categorie.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [
  ]
})
export class CategoriesComponent implements OnInit {
  
  public categories: Categorie[] = [];
  public cargando: boolean = true;

  constructor(
    private categorieService: CategorieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarCategories();
  }
  cargarCategories() {
    this.cargando = true;
      this.categorieService.cargarCategories()
        .subscribe(categories => {
          this.categories = categories;
          console.log(categories)
          this.cargando = false;
        });
    }

}
