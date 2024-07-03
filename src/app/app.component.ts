import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HardcodedAuthenticationService } from './service/authentication/hardcoded-authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title!:'CGMSC DASHBOARD'
  isLoginPage = false;

constructor(private router: Router,private hardcodedAuthemtication:HardcodedAuthenticationService) {}

logout() {
this.hardcodedAuthemtication.logout();
this.router.navigate(['login'])
}
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.urlAfterRedirects === '/login';
      }
    });
  }
}
