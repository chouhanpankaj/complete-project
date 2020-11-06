import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public category = [];
  fileToUpload:File = null;
  
  constructor(private productService:ProductService, private categoryService:CategoryService, private router:Router) { }

  public getCategory() {
    this.categoryService.getCategoryList().subscribe(
      (response:any)=>{
        this.category = response;
      }
    );
  }

  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  // public save(frm) {
  //   this.productService.addProduct(frm.value).subscribe((response:any)=> {
      
  //     if(response.status) {
  //       this.router.navigateByUrl('/products');
  //       // console.log(response);
  //     }
  //   })
  // }

  public save(frm) {
    if(this.fileToUpload!=null) {
      this.productService.addProduct(frm.value, this.fileToUpload).subscribe((response:any)=> {
      console.log(frm.value);
      if(response.status) {
        this.router.navigateByUrl('/products');
        // console.log(response);
      }
    });
    }else {
      alert('please select image !');
    }
    
  }

  ngOnInit(): void {
    this.getCategory();
  }

}
