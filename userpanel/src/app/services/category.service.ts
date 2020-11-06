import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import WebServer from '../WebServer';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public getCategoryList() {
    return this.http.get(WebServer.GET_CATEGORY);
  } 

}
