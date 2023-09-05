import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

 public usuario : Usuario;


constructor( private serviceUser : UserService){
 this.usuario = serviceUser.usuario;

}


logout(){
  this.serviceUser.logout();
}



}
