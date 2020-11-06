import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

import { CategoryService } from './services/category.service';
import { ProductsService } from './services/products.service';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';
import { CartproductComponent } from './cartproduct/cartproduct.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    DetailsComponent,
    ProductsComponent,
    CartComponent,
    CartproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CategoryService,
    ProductsService,
    RegisterService,
    LoginService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
