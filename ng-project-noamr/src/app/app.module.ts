import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MulTableComponent } from './mul-table/mul-table.component';
import { PeopleInfoComponent } from './people-info/people-info.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaService } from './shared/services/pizza-service.service';



@NgModule({
  declarations: [
    AppComponent,
    MulTableComponent,
    PeopleInfoComponent,
    HeaderComponent,
    FooterComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PizzaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
