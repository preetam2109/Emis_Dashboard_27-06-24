import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class HardcodedAuthenticationService {
//   constructor() {}

//   authenticate(username: any, password: any) {
//     if (username == 'mdcgmsc' || username == 'gmfin@dpdmis.in' && password == '2025#cgmsc') {
//       sessionStorage.setItem('authenticatedUser', username);
//       return true;
//     }
//     return false;
//   }

//   isUserLogedIn() {
//     let user = sessionStorage.getItem('authenticatedUser');
//     return !(user === null);
//   }
//   logout() {
//     sessionStorage.removeItem('authenticatedUser');
//   }
// }

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: any, password: any) {
    if (username === 'mdcgmsc' && password === '2025#cgmsc') {
      sessionStorage.setItem('authenticatedUser', username);
      sessionStorage.setItem('role', 'MD'); // Assign MD role
      return true;
    } else if (username === 'gmfin@dpdmis.in' && password === '2025#cgmsc') {
      sessionStorage.setItem('authenticatedUser', username);
      sessionStorage.setItem('role', 'GM'); // Assign GM role
      return true;
    }else if(username==='gmt@123' && password==='2025#cgmsc'){
      sessionStorage.setItem('authenticatedUser', username);
      sessionStorage.setItem('role', 'GMT'); // Assign GT role
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  getUserRole() {
    return sessionStorage.getItem('role');
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('role');
  }
}
