import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import WebServer from '../WebServer';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  public addUser(data) {
    // console.log(this.http.post(WebServer.ADD_USER, data));
    return this.http.post(WebServer.ADD_USER, data);
  }

}
