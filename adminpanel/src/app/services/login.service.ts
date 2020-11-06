import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import WebServer from '../WebServer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public login(data) {
    // console.log(data);
    data['role'] = 1;
    return this.http.post(WebServer.LOGIN_USER, data);
  }

}
