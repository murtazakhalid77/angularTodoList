import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  authenticated:boolean=false;
  public username:string='';
  public password:string='';

  constructor(private router:Router,private hardcodeAuth:HardcodedAuthenticationService){

  }

  ngOnInit(): void {
  }

  handleLogin():void{
    if(this.hardcodeAuth.authenticate(this.username,this.password)){
      this.router.navigate(['/todos'])
    }
    else{
      this.authenticated=true
    }
  }

}
