import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, delay, map, Observable, of, tap, using } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CargarUsuario } from '../interfaces/cargar-usuarios.iterfcae';
import { LoginForm } from '../interfaces/login-form.iterface';


// Interface
import { UserForm } from '../interfaces/user-form.interface';

// Modelo
import { Usuario } from '../models/usuario.model';

// Variable API
const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class UserService {

public usuario: Usuario;

  constructor(private hhtp: HttpClient,
              private router: Router) {}

get token(): string {
  return localStorage.getItem('token');
}

get headers(){
  return {
      headers :{
      'x-token' : this.token
      }
  } }


get uid(): number{

  return this.usuario.id || 0;
}

// Crear llamado a la API
  crearUsuario(formData: UserForm) {
    const url = `${base_url}/usuarios`;
    return this.hhtp.post(url, formData, this.headers)
              .pipe(
                map((resp:{ ok:boolean, usuarios: Usuario[]}) => resp.usuarios)
              )
  }

 actualizarPerfil( data :{nombre:string, apellido:string, email:string, rol_id:number}){
  data = {
    ...data,
    rol_id: this.usuario.rol_id
  }
  const url = `${base_url}/usuarios/${this.uid}`;
    return this.hhtp.put(url, data, this.headers)
   
 }


  cargarUsuarioById(id: string){
    const url = `${base_url}/usuarios/${id}`;
    return this.hhtp.get(url,  this.headers)
              .pipe(
                map((resp:{ ok:boolean, usuario: Usuario}) => resp.usuario)
              )
  }

  updateUsuario(usuario: Usuario) {
    const url = `${base_url}/usuarios/${usuario.id}`;
    return this.hhtp.put(url, usuario, this.headers);
  }
  
  deleteUsuario(_id: any) {
    const url = `${base_url}/usuarios/${_id}`;
    return this.hhtp.delete(url,this.headers);
  }

  cargarUsuarios(desde: number = 0){
    const url = `${base_url}/usuarios?desde=${desde}`;
    return this.hhtp.get<CargarUsuario>(url,this.headers)
      .pipe(
        delay(400),
        map( resp =>{
          const usuarios = resp.usuarios.map(
            user => new Usuario (user.nombre,user.apellido,user.email,user.rol_id, user.img,user.id,user.estado)
            );

          return {
            total: resp.total,
            usuarios
          };
        })
      )
  }

  logout() {

    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  // Validación de token 
  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';
    return this.hhtp.get(`${base_url}/login/renew`, {
      headers: {
        'x-token': token
      }

    }).pipe(
      map((resp: any) => {
        console.log(resp);
      const {nombre, apellido,email,estado ,img='',rol_id, id} = resp.usuario;
      this.usuario = new Usuario(nombre,apellido,email,rol_id,img,id,estado);
      console.log(this.usuario.id)
      localStorage.setItem('token', resp.token);
        return true;
      }),
      
      catchError(error => of(false))
    )
  }
  // Validación de token Fin 


  login(formData: any) {
    const fomrLogin: LoginForm = formData;
    return this.hhtp.post(`${base_url}/login`, fomrLogin)
      .pipe(
        tap((resp: any) => {
          localStorage.setItem('token', resp.token)
        })
      )
  }

}

