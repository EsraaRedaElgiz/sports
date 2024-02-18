import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IntroPartComponent } from './componentes/introPart/intro-part/intro-part.component';
import { NavBarComponent } from './componentes/sharedComponentes/navBar/nav-bar/nav-bar.component';
import { FotterComponent } from './componentes/sharedComponentes/fotter/fotter/fotter.component';
import { ProductDetailsComponent } from './componentes/products/product-details/product-details.component';
import { ProductFormComponent } from './componentes/products/product-form/product-form.component';
import { HomeComponentComponent } from './componentes/home-component/home-component.component';
import { ProductsTableComponent } from './componentes/products/products-table/products-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IntroPartComponent,
    FotterComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    HomeComponentComponent,
    ProductsTableComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
