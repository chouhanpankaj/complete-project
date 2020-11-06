import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import WebServer from '../WebServer';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  public getProductsByCat(data) {
    return this.http.post(WebServer.GET_PRODUCTS, data);
  }

  public getProductsById(data) {
    // console.log(data);
    return this.http.post(WebServer.GET_PRODUCT_BY_ID, data);
  }

}
