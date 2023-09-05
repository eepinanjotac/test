import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
import { RolService } from 'src/app/services/rol.service';
import { Rol } from 'src/app/models/rol.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})

export class UsersComponent implements OnInit {


  public usuarios: Usuario[] = [];
  public roles: Rol[] = [];
  public estadoActivo: boolean = true;
  public usuario: any;
  public totalUsuarios: number = 0;
  public formSubmitted = false;
  public ocultarModalCrear: boolean = true;
  public desde : number = 0;
  public cargando : boolean = true;
  public mailUser: string = this.userService.usuario.email;



  public userFormUpdate = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  },
    {
      Validators
    })

  public userForm = this.fb.group({
    nombre: ['Jose Alvear', [Validators.required, Validators.minLength(3)]],
    apellido: ['Pedro Jose', [Validators.required, Validators.minLength(3)]],
    email: ['test1@gamil.com', [Validators.required, Validators.email]],
    // Reviar rol que no ingresa
    rol_id: [''],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    password2: ['123456', [Validators.required, Validators.minLength(6)]]
  },
    {
      Validators: this.passwordsIguales('password', 'password2')
    }

  );

  

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private rolService: RolService
  ) { }

  ngOnInit(): void {


    this.cargarUsuarios();
    this.cargarRoles();

  }

  cerrarModalCreate() {
    this.ocultarModalCrear = true;
  }
  abrirModalCreate() {
    this.ocultarModalCrear = false;
  }

  cargarUsuarios() {
    this.cargando = true;
    this.userService.cargarUsuarios(this.desde)
      .subscribe(({ total, usuarios }) => {
        this.totalUsuarios = total;
        this.usuarios = usuarios;
        this.cargando = false;

      })
  }

  cambiarPagina(valor:number){

    this.desde += valor;
    if(this.desde < 0){
      this.desde =0;
    } else if (this.desde > this.totalUsuarios ){
      this.desde -= valor;
    }

    this.cargarUsuarios();

  }

  cargarRoles() {
    this.rolService.cargarRoles()
      .subscribe((roles: Rol[]) => {
        this.roles = roles;
      })
  }

  crearUsuario() {
    this.formSubmitted = true;

    if (this.userForm.invalid) {
      return;
    }
    // realizar posteo
    this.userService.crearUsuario(this.userForm.value)
      .subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Creado',
          text: 'Usuario creado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        this.recargarComponente();
        this.cerrarModalCreate();

      }, (err) => {
        // Si sucede un error
        Swal.fire('Error', err.error.msg, 'error');
      });
  }




  borrarUsuario(usuario: any) {

   
    
    Swal.fire({
      title: '¿Borrar usuario?',
      text : `Estas a punto de borrar a ${usuario.nombre} ${usuario.apellido}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo'
    }).then((result) => {
      if (result.value) {
        this.userService.deleteUsuario(usuario.id)
          .subscribe((resp: any) => {
            this.cargarUsuarios();
            Swal.fire(
              'Usuario borrado',
              ``,
              'success'
            )
          })
      }
    })


  }
  // Recargar componente

  recargarComponente() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/dashboard/usuarios']);
    });
  }

  campoNoValido(campo: string): boolean {
    if (this.userForm.get(campo)?.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  passwordsNoValidas() {
    const pass1 = this.userForm.get('password')?.value;
    const pass2 = this.userForm.get('password2')?.value;

    if (pass1 === pass2) {
      return false;
    } else {
      return true;
    }

  }



  passwordsIguales(pass1Name: string, pass2Name: string) {

    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);
      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ noEsIgual: true })
      }
    }

  }



}
