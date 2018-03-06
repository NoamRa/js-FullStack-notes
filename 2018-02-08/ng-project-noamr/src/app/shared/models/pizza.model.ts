export class Pizza {
    constructor(
      public diameter: number, 
      public slices: number,
      public toppings: number
    ) { }

    makePizza(): {
      diameter:number,
      slices: number,
      toppings: number,
      price:number
    }
    { return {
      "diameter": this.diameter,
      "slices": this.slices,
      "toppings": this.toppings,
      "price": this.diameter + this.toppings * 5
      };
    }

    sDiameter():string{
      return `${this.diameter}`
    }
    sSlices():string{
      return `${this.slices}`
    }
    sToppings():string{
      return `${this.toppings}`
    }
    sPrice():string{
      return `${this.diameter + this.toppings * 5}`
    }
}