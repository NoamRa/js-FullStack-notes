import { Directive , TemplateRef, ViewContainerRef, Input , OnInit, Renderer2, ElementRef } from '@angular/core';
import { conf } from '../global-config/config';

@Directive({
    selector: '[app-product-price]',
    // inputs: ['price : priceFunc']
})

export class ProductPriceDirective implements OnInit {

  constructor(private elementRef:ElementRef , 
              private renderer: Renderer2){}
  @Input("currency") currency;
  @Input("price") price;

  private defaultPrice = conf.defaultPrice || 100;
  private defaultCurrency = conf.defaultCurrency || '₪';
  private currencyBeforePrice = conf.currencyBeforePrice || false;

  setPriceAndCurrency(){
    let prc;
    if(this.price) {
      prc = this.renderer.createText(this.price)
    } else {
      prc = this.renderer.createText(this.defaultPrice.toString());
    }

    let curr;
    if (this.currency) {
      curr = this.renderer.createText(this.currency)
    } else {
      curr = this.renderer.createText(this.defaultCurrency);
    }

    if (this.currencyBeforePrice) {
      this.renderer.appendChild(this.elementRef.nativeElement, curr);
      this.renderer.appendChild(this.elementRef.nativeElement, prc);
    } else {
      this.renderer.appendChild(this.elementRef.nativeElement, prc);
      this.renderer.appendChild(this.elementRef.nativeElement, curr);   
    }
  }

  ngOnInit(){
    this.setPriceAndCurrency();
  }

}