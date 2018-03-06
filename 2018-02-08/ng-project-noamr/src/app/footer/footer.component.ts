import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor() { }
  currentYear = new Date().getFullYear();
  animals = ["Animals", "Turtles", "Dolphins", "Dogs", "Cats"];
  animal = this.animals[Math.floor(Math.random() * this.animals.length)];

}
