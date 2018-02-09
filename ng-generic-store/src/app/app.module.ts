import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CountryService } from './shared/services/country.service';
import { BooksService } from './shared/services/books.service';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { NgModule } from '@angular/core';
import { RegisterFormComponent } from './register-form/register-form.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HoverDirective } from './shared/directives/hover.directive';
import { ProductsComponent } from './products/products.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './account/account.component';


import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginFormComponent,
    MainSectionComponent,
    RegisterFormComponent,
    CountryInfoComponent,
    DropdownComponent,
    HoverDirective,
    ProductsComponent,
    ProductPreviewComponent,
    ProductDetailsComponent,
    ProductListComponent,
    PageNotFoundComponent,
    AccountComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],

  providers: [
    CountryService,
    BooksService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
