import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
<<<<<<< HEAD
=======
import { ProductDetailsComponent } from './product-details/product-details.component';
>>>>>>> m8-start

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
<<<<<<< HEAD
    SiteHeaderComponent
=======
    SiteHeaderComponent,
    ProductDetailsComponent
>>>>>>> m8-start
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
