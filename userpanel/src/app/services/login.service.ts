import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import WebServer from '../WebServer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public loginUser(data) {
    data['role']=2;
    // console.log(data);
    return this.http.post(WebServer.LOGIN_USER, data);
  }

}
