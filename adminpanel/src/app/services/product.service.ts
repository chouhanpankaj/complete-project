import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import WebServer from '../WebServer';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public getProductsByCat(data) {
    return this.http.post(WebServer.GET_PRODUCT_BY_ID, data);

  }

  public getAllProducts() {
    return this.http.get(WebServer.GET_PRODUCT_LIST);
  }

  public addProduct(data, fileToUpload:File) {
    const formData: FormData = new FormData();
    formData.append('category_id', data.category_id);
    formData.append('product_name', data.product_name);
    formData.append('product_price', data.product_price);
    formData.append('product_desc', data.product_desc);
    formData.append('product_image', fileToUpload, fileToUpload.name);
    console.log(data);
    return this.http.post(WebServer.SAVE_PRODUCT, formData);
  }

  public postFile(fileToUpload: File, pid)
  {
    const formData: FormData = new FormData();
    
    formData.append('image', fileToUpload, fileToUpload.name);
    formData.append('id', pid);
    return this.http.post(WebServer.UPLOAD_IMAGE, formData);
  } 
  
}
