import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatTableExporterModule } from 'mat-table-exporter';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { ToastrService } from 'ngx-toastr';
import { DropdownModule } from 'primeng/dropdown';
import { MasDistrict } from 'src/app/Model/MasDistrict';
import { ApiService } from 'src/app/service/api.service';
import { BasicAuthenticationService } from 'src/app/service/authentication/basic-authentication.service';

@Component({
  selector: 'app-collector-login',
  standalone: true,
  imports: [SelectDropDownModule,DropdownModule,MatSelectModule,FormsModule,NgSelectModule,FormsModule,CommonModule,MatButtonModule,MatMenuModule, MatTableExporterModule,MatPaginatorModule, MatTableModule],

  templateUrl: './collector-login.component.html',
  styleUrl: './collector-login.component.css'
})
export class CollectorLoginComponent {
  toggleText() {
    this.showFullText = !this.showFullText; // Toggle the visibility of full text
  }
  districts :any= [];
  selectedDistrictId: any | null = null;
  showFullText = false;

  emailid: any;
  pwd : any='Admin@cgmsc123'
  errorMessage="Invalid Credential";
  invalidLogin=false;


  constructor(public api:ApiService,public loginService:BasicAuthenticationService,private toastr: ToastrService,private router:Router){
    
  }
  ngOnInit(): void {
    debugger
    this.api.getMasDistrict(false, 0, 0, 0, 0).subscribe((res: any[]) => {
      console.log('API Response:', res);
      if (res && res.length > 0) {
        this.districts = res.map(item => ({
          emailid: item.emailid, // Adjust key names if needed
          distname: item.distname
        }));
        console.log('Processed Districts:', this.districts);
      } else {
        console.error('No districts found or incorrect structure:', res);
      }
    });
    
  }
  
  

  


  handleLogin() {
    debugger
    sessionStorage.removeItem
    localStorage.removeItem
    this.emailid=this.selectedDistrictId

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
