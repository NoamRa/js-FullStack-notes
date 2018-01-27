import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MulTableComponent } from './mul-table/mul-table.component';
import { PeopleInfoComponent } from './people-info/people-info.component';


@NgModule({
  declarations: [
    AppComponent,
    MulTableComponent,
    PeopleInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
