import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '', component : DashboardComponent},
  {path : 'menu', component : MenuComponent},
  {path : 'category', component : CategoryComponent},
  {path : 'addcategory', component : AddCategoryComponent},
  {path : 'showcategory', component : ShowCategoryComponent},
  {path : 'products', component : ProductsComponent},
  {path : 'addproducts', component : AddProductComponent},
  {path : 'showproducts', component : ShowProductComponent},
  {path : 'customer', component : CustomerComponent},
  {path : 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
