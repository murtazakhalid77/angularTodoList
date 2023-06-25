import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:any,password:any){
    if(username=="murtaza"&& password==123){
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticatedUser')
    if(user==null){
     return false;
    }
    return true;  
  }
}
