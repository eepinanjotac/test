import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit{
  public menuItem!: any[];

  public usuario : Usuario;
    constructor( private serviseSidebar: SidebarService, 
                 private serviceUser: UserService){
      this.menuItem = serviseSidebar.menu;
      this.usuario = serviceUser.usuario;
      /* this.imgUrl = serviceUser.usuario.imagenUrl;
      this.nombreApellido = serviceUser.usuario.nombreApellido; */
    }

  ngOnInit(): void {
    
  }

}
