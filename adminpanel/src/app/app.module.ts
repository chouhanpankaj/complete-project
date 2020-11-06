import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { CustomerComponent } from './customer/customer.component';

import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';
import { LoginService} from './services/login.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoryComponent,
    DashboardComponent,
    ProductsComponent,
    AddCategoryComponent,
    ShowCategoryComponent,
    AddProductComponent,
    ShowProductComponent,
    CustomerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CategoryService,
    ProductService,
    CustomerService,
    LoginService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
