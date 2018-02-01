import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  title="";
  onLoginOrRgisterEmit(str:string):void{
      this.title=str;
  }

}
