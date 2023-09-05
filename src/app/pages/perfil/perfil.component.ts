import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {

  public perfilForm: FormGroup;
  public usuario: Usuario;
  public imagenSubir: File;
  public imgTemp: any = null;

  constructor(private fb: FormBuilder,
    private usuerService: UserService,
    private fileUploadService: FileUploadService
  ) {

    this.usuario = usuerService.usuario;
  }

  ngOnInit(): void {

    this.perfilForm = this.fb.group({
      nombre: [this.usuario.nombre, Validators.required],
      apellido: [this.usuario.apellido, Validators.required],
      email: [this.usuario.email, [Validators.required, Validators.email]]
    })

  }

  actualizarPerfil() {
    console.log(this.perfilForm.value)
    this.usuerService.actualizarPerfil(this.perfilForm.value)
      .subscribe(() => {
        const { nombre, apellido, email } = this.perfilForm.value;
        this.usuario.nombre = nombre;
        this.usuario.apellido = apellido;
        this.usuario.email = email;
        Swal.fire('Guardado', 'Cambios guardados', 'success');
      }, (err) => {
        Swal.fire('error', err.error.msg, 'error');
      })
  }

  cambiarImagen(file: File) {
    this.imagenSubir = file;

    if (!file) { return; }
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.imgTemp = reader.result;
    }

  }

  subirImagen() {
    this.fileUploadService
      .actualizarFoto(
        this.imagenSubir, 'usuarios', this.usuario.id
      ).then(img => {
        this.usuario.img = img;
        Swal.fire('Guardado', 'Imagen actualizada', 'success');
      }).catch(err => {
        Swal.fire('error', 'No se pudo subir la imagen', 'error');
        })

  }



}
