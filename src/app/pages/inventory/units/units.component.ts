import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Model
import { Unit } from 'src/app/models/inventory/unit.model';

//Service
import { UnitService } from 'src/app/services/inventory/unit.service';


@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styles: [
  ]
})
export class UnitsComponent implements OnInit{
  public units: Unit[]=[];
  public cargando: boolean = true;

  constructor( 
    private unitService: UnitService,
    private router: Router
    ){

  }
  ngOnInit(): void {
    this.cargarUnits();
    
  }

  cargarUnits() {
    this.cargando = true;
      this.unitService.cargarUnits()
        .subscribe(units => {
          this.units = units;
          console.log(units)
          this.cargando = false;
        });
    }

}
