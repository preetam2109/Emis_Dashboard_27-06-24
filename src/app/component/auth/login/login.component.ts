import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/service/authentication/hardcoded-authentication.service';
import { ToastrService } from 'ngx-toastr';
import { BasicAuthenticationService } from 'src/app/service/authentication/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
warehouseId: any;
handleWarehouseLogin() {
throw new Error('Method not implemented.');
}
  username:any;
  emailid: any;
  pwd : any;
  password:any;
  email:any
  errorMessage="Invalid Credential";
  invalidLogin=false;
  
  constructor(public loginService:BasicAuthenticationService,private toastr: ToastrService,private router:Router,public  hardcodedAuthenticationService:HardcodedAuthenticationService){

  }
  handleLogin() {
    sessionStorage.removeItem
    localStorage.removeItem
    
    //  console.log(this.username);
    //if(this.username==="SEC1" && this.password === '2025#cgmsc') {
      this.loginService.executeAuthenticationService(this.emailid, this.pwd).subscribe(
        res => {
    if (res.message === "Successfully Login"){
      //Redirect to Welcome Page
      this.invalidLogin = false
      this.toastr.success('Logged in Successfully');
      console.log('login details',res)
      // this.router.navigate(['home'])
      this.router.navigate(['/home']); // Redirect to category selector after login
    } else {
      this.invalidLogin = true
      this.toastr.error('Login Failed', 'Invalid Credentials');
    }
  },
  error => {
    this.invalidLogin = true;
    this.errorMessage = 'Invalid Credentials';
    console.error('Login error', error);
  }

  );
}
}
  
  


