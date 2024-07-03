import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/service/authentication/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:any;
  password:any;
  email:any
  errorMessage="Invalid Credential";
  invalidLogin=false;
  
  constructor(private router:Router,public  hardcodedAuthenticationService:HardcodedAuthenticationService){

  }
  handleLogin() {
    debugger
     console.log(this.username);
    //if(this.username==="mdcgmsc" && this.password === '2025#cgmsc') {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to Welcome Page
      this.invalidLogin = false
      this.router.navigate(['home'])
    } else {
      this.invalidLogin = true
    }
  }
  
  }


