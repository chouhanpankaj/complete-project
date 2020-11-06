import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LoginService } from '../services/login.service';

declare function loadPage() : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  status:string;
  public token;

  constructor(private loginService:LoginService, private router:Router) { }

  public loginUser(frmdata:any) {
    
    this.loginService.loginUser(frmdata.value).subscribe(
      (response:any)=> {
        if(response){
          alert('successs');
          this.status= 'login successfull';
          this.token = response.token;
          localStorage.setItem('entrycard', this.token);
          console.log(this.token);
        }
      }, (err) => {
        alert('failed');
        this.status = 'login falied';
        
      }
    );
  }

  ngOnInit(): void {
    loadPage();
  }

}
