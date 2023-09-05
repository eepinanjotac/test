import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private usuerService: UserService,
               private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
     return this.usuerService.validarToken()
      .pipe(
        tap( estaAutenticado =>{
          if(!estaAutenticado){
            this.router.navigateByUrl('/login');
          }
        })
      )
        
      
      

  }
  
}
