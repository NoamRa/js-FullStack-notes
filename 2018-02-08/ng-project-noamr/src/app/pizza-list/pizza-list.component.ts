import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../shared/services/pizza-service.service';
import { Pizza } from '../shared/models/pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  constructor(private pizzaService: PizzaService) { }

  pizzas:Pizza[];

  ngOnInit() {
    this.pizzas = this.pizzaService.makePizzas();
  }

}
