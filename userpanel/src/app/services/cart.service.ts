import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import WebServer from '../WebServer';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartList=[];
  
  constructor(private http:HttpClient) { }

  public addToCart(pid) {
    this.cartList.push({id:pid, qty:1});
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }

  public getCart(){
    return this.cartList;
  }

  public addOrder(cart) {
    var token = localStorage.getItem('entrycard');
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    console.log(headers_object);
    return this.http.post(WebServer.ADD_ORDER, {'products':cart}, {'headers':headers_object});
  }

}
