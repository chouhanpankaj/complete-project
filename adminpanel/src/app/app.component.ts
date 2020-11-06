import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminpanel';

  status:string;
  public entrycard:any = '';
  // public token:any = '';
  
  constructor(private loginService:LoginService, private router:Router)
  {
    this.entrycard = localStorage.getItem('token');
  }

  
  public loginUser(frmdata:any) {
    this.loginService.login(frmdata.value).subscribe(
      (response:any)=>{
        if(response){
          localStorage.setItem('token', response.token);
          this.entrycard = response.token;
          this.router.navigateByUrl('/');
        }
      }, (err)=>{
        this.status = 'login failed';
        alert(this.status)
      }
      );
    }
    
    tokenChange(status)
    {
      if(status==false){
        this.entrycard = null;
      }
    }
    
  }
