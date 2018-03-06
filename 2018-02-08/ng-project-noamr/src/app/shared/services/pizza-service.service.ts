import { Pizza } from '../models/pizza.model';

export class PizzaService {

  static PIZZAS_AMOUNT = 100;

  randomMinMax(min, max):number{
    // generate random number between min and max including.
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  makePizzas():Pizza[] {
    let pizzas = []
    for (let p =0; p< PizzaService.PIZZAS_AMOUNT; p++) {
      let diameter = this.randomMinMax(10, 50);
      let slices = this.randomMinMax(3, 8);
      let toppings = this.randomMinMax(0, 4);
      pizzas.push(new Pizza(diameter, slices, toppings));
    }

    return pizzas
  }

}
