import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

declare function loadPage() : any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  status:string;

  constructor(private registerService:RegisterService, private router:Router) { }

  public add(frm){
    console.log(frm.value);
    this.registerService.addUser(frm.value).subscribe(
      (response:any)=> {

        if(response){
          this.status='registration successfull.';
        }
      }, (err) => {
        this.status='registration failed.';
      });
  }

  ngOnInit(): void {
    loadPage();
  }

}
