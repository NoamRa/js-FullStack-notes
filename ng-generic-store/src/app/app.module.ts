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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginFormComponent,
    MainSectionComponent,
    RegisterFormComponent,
    CountryInfoComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [
    CountryService,
    BooksService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
