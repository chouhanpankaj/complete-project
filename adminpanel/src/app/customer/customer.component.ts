import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customer = [];

  constructor(private customerService:CustomerService) { }

  public showAllCustomer() {
    this.customerService.getCustomer().subscribe(
      (response:any)=>{
        this.customer = response;
      }
    );
  }

  ngOnInit(): void {
    this.showAllCustomer();
  }

}
