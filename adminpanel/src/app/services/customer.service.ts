import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import WebServer from '../WebServer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public getCustomer() {
    console.log(this.http.get(WebServer.SHOW_CUSTOMER));
    return this.http.get(WebServer.SHOW_CUSTOMER);
  }

}
