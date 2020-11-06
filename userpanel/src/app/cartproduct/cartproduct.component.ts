import { Component, OnInit, Input} from '@angular/core';

import { ProductsService } from '../services/products.service';
import WebServer from '../WebServer';

@Component({
  selector: 'app-cartproduct',
  templateUrl: './cartproduct.component.html',
  styleUrls: ['./cartproduct.component.css']
})
export class CartproductComponent implements OnInit {
  @Input() pid:any;
  @Input() qty:any;
  
  public server:any;
  public product:any;

  constructor(private productService:ProductsService) { 
    this.server = WebServer.SERVER;
    
  }

  public getProductsWitId(pid) {
    // var x = data.id;
    // console.log('productid=',x);
    this.productService.getProductsById({id:pid}).subscribe(
      (response:any)=>{
        // console.log(response);
        this.product = response.data;
        // console.log(this.products);
      }
    );
  }


  ngOnInit(): void {
   this.getProductsWitId(this.pid);
  }

}
