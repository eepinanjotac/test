import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  public formSubmitted = false;

  loginForm: FormGroup;
  
  constructor(private router: Router ,
              private fb: FormBuilder,
              private userService: UserService){


                this.loginForm = this.fb.group({
                  email: [localStorage.getItem('email') || '',[Validators.required, Validators.email]],
                  password: ['',Validators.required],
                  remember: [false]
              });
                
              }

    
  login(){
    this.userService.login(this.loginForm.value)
    .subscribe(res =>{
        if(this.loginForm.get('remember')?.value){
          localStorage.setItem('email', this.loginForm.get('email')?.value);
        } else{
          localStorage.removeItem('email');
        }
        this.router.navigateByUrl('/');

    }, (err)=>{
      // Si sucede un error
      Swal.fire('Error', err.error.msg, 'error');

    });

  }

  

}
