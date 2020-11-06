import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CartproductComponent } from './cartproduct/cartproduct.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'menu', component : MenuComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'login', component: LoginComponent},
  {path : 'contact', component: ContactComponent},
  {path : 'about', component: AboutComponent},
  {path : 'details', component : DetailsComponent},
  {path : 'products', component : ProductsComponent},
  {path: 'cart', component : CartComponent},
  {path: 'cartproduct', component : CartproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
