import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CountryService } from './shared/services/country.service';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { NgModule } from '@angular/core';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginFormComponent,
    MainSectionComponent,
    RegisterFormComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [
    CountryService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
