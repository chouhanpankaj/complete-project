import { Component, OnInit } from '@angular/core';
// import { addListener } from 'process';

import { CategoryService } from '../services/category.service';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

import WebServer from '../WebServer';


declare function loadPage() : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit 
{
  public server:any;
  public category=[];
  public products=[];

  constructor(private categoryService:CategoryService, private productService:ProductsService, private cartService:CartService) { 
    this.server = WebServer.SERVER;
  }

  public getCategory() {
    this.categoryService.getCategoryList().subscribe(
      (response:any)=> {
        console.log(response);
        this.category = response;
      }
    );
  }

  public getProductsWithCat(cid) {
    this.productService.getProductsByCat({id:cid}).subscribe(
      (response:any)=>{
        this.products = response;
      }
    );
  }

  public addToCart(pid) {
    this.cartService.addToCart(pid);
    
  }

  ngOnInit(): void {
    loadPage();
    this.getCategory();
  }

}
