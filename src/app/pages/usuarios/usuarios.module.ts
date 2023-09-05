import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { UserComponent } from './users/user.component';

@NgModule({
  declarations: [
    UsersComponent,
    RolesComponent,
    UserComponent
  ], 
  exports:[
    UsersComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
