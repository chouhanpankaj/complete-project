import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import WebServer from '../WebServer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public server:any;
  public cartitem = [];

  constructor(private cartService:CartService, private productService:ProductsService) { 
    this.server = WebServer.SERVER;
  }

  ngOnInit(): void {
    this.cartitem = this.cartService.getCart();
  }

  public checkout(cart) {
    console.log(cart);
    // for(var i=0; i<this.cartitem.length; i++){
      this.cartService.addOrder(cart).subscribe(
        (response:any)=>{
          if(response.status) {
            localStorage.removeItem('cart');
            window.location.reload();
          }
        }
      );
  }
}
