import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import Swal from 'sweetalert2'

import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { RolService } from 'src/app/services/rol.service';
import { Rol } from 'src/app/models/rol.model';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styles: [
  ]
})
export class RolesComponent  implements OnInit{
  

 public roles: Rol[] = [];
 public role:any;
 public  estadoActivo: boolean;
  public formSubmitted = false;

  public rolForm = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(4)]],
    descripcion: ['',[Validators.required, Validators.minLength(4)]],
    permisos: ['',[Validators.required, Validators.minLength(4)]]

  },{
    Validators
  });

  constructor (private fb: FormBuilder,
                private rolService : RolService,
                private router: Router ){}

ngOnInit(): void {
  this.rolService.cargarRoles()
    .subscribe(roles => {
      this.roles = roles;
      console.log(roles)
    });
}


  crearRol(){
    this.formSubmitted = true;
    console.log(this.rolForm.value)
    if(this.rolForm.invalid){
      return;
    }
    // realizar posteo

    this.rolService.crearRol(this.rolForm.value)
    .subscribe(res =>{
      Swal.fire({
        icon: 'success',
        title: 'Creado',
        text: 'Rol creado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    }, (err)=>{
      // Si sucede un error
      Swal.fire('Error', err.error.msg, 'error');

    });
   this.recargarComponente();

  }

borrarRol(role: Rol){

  console.log("Borrar");
  console.log(role.nombre);

}


  recargarComponente() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/dashboard/roles']);
    });
  }

  campoNoValido( campo: string): boolean {
    if( this.rolForm.get(campo)?.invalid && this.formSubmitted ){
      return true;
    } else{
      return false;
    }
  }

  
}