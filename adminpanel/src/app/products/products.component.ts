import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  fileToUpload:File = null;
  public products = [];
  public category = [];

  constructor(private productService:ProductService, private categoryService:CategoryService) { }

  public getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (response:any)=>{
        this.products = [];
        this.products = response;
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

  public getCategory() {
    this.categoryService.getCategoryList().subscribe(
      (response:any)=>{
        this.category = response;
      }
    );
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getCategory();
  }

 
  product_id:any;

  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  public upload(pid)
  {
    if(this.fileToUpload!=null)
    {
    this.productService.postFile(this.fileToUpload, pid).subscribe(
      data=> 
      {
        // console.log(data);
        this.fileToUpload = null;
      }, error => {
        console.log('error');
      }
    );
    }else{
      alert("Please Select Image !");
    }
  }

}
