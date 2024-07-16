import { Component, OnInit,HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HardcodedAuthenticationService } from './service/authentication/hardcoded-authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  deferredPrompt: any;
  showButton = false;
  title!:'CGMSC DASHBOARD'
  isLoginPage = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e: Event) {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    this.showButton = true;
  }

constructor(private toastr: ToastrService,private router: Router,private hardcodedAuthemtication:HardcodedAuthenticationService) {}

logout() {
this.hardcodedAuthemtication.logout();
this.toastr.success('Logout Successfully');
this.router.navigate(['login'])
}
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.urlAfterRedirects === '/login';
      }
    });
  }
  addToHomeScreen() {
    // Hide the app provided install promotion
    this.showButton = false;
    // Show the install prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice.then((choiceResult: { outcome: string; }) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      this.deferredPrompt = null;
    });
  }
  hideAddToHomeScreen(){
    this.showButton=false
  }
  handleOutsideClick(event:Event){
if(this.showButton){
  this.hideAddToHomeScreen()
}
  }
  handleInsideClick(event:Event){
event.stopPropagation();
  }
}