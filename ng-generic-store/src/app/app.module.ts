// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// routing
import { AppRoutingModule } from './app-routing.module';

// service providers
import { CountryService } from './shared/services/country.service';
import { BooksService } from './shared/services/books.service';

// container declarations
import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HoverDirective } from './shared/directives/hover.directive';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ProductPriceDirective } from './shared/directives/price.directive';
import { ProductsComponent } from './products/products.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TextTrimmerPipe } from './shared/pipes/text-trimmer.pipe';

@NgModule({
  declarations: [
    AccountComponent,
    AppComponent,
    CountryInfoComponent,
    DropdownComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    HoverDirective,
    LoginFormComponent,
    MainSectionComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductPreviewComponent,
    ProductsComponent,
    RegisterFormComponent,
    TextTrimmerPipe,
    ProductPriceDirective,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],

  providers: [
    BooksService,
    CountryService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
