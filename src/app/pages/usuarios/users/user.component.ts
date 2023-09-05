import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/models/rol.model';
import { Usuario } from 'src/app/models/usuario.model';
import { RolService } from 'src/app/services/rol.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent  implements OnInit{
public usaurioSeleccionado : Usuario;
public rolSeleccionado : Rol;

public roles: Rol []= [];

public userForm = this.fb.group({
  nombre: ['',[Validators.required, Validators.minLength(3)]],
  apellido: ['',[Validators.required, Validators.minLength(3)]],
  email: ['',[Validators.required, Validators.email]],
  role:['']

 },
 {
   Validators
 }) 

  constructor( private fb : FormBuilder,
                private userService: UserService,
                private rolService : RolService,
                private router: Router,
                private activateRoute: ActivatedRoute){}


  ngOnInit(): void {
    this.cargarRoles();
   this.activateRoute.params
      .subscribe(({id}) => {
      this.cargarUsuario(id)
   });

   this.userForm.get('role').valueChanges
   .subscribe( rolId => {
     this.rolSeleccionado = this.roles.find( r => r.id === rolId );
   })

   
    
  }

  cargarUsuario(id : string){
    
 this.userService.cargarUsuarioById(id)
  .subscribe(usuario =>{
    const{nombre, apellido, email, rol_id} = usuario;
    this.usaurioSeleccionado = usuario;
    this.userForm.setValue({nombre, apellido, email, rol_id})
  })
  }

  cargarRoles(){
    this.rolService.cargarRoles()
    .subscribe((roles: Rol[])=>{
      this.roles = roles;
    })
  }

  actualizarUsuario(){

    if(this.userForm.invalid){
      return;
    }
    const data = {
      ...this.userForm.value,
      uid: this.usaurioSeleccionado.id
    }
    
    // realizar posteo
    this.userService.updateUsuario(data)
    .subscribe(res =>{

     Swal.fire({
        icon: 'success',
        title: 'Actualizado',
        text: 'Usuario actualizado correctamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl(`/dashboard/usuarios`)
      
    }, (err)=>{
      // Si sucede un error
      Swal.fire('Error', err.error.msg, 'error');
      
    });

   
  }
  

}
