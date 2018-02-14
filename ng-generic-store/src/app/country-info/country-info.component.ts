import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { CountryBasic } from '../shared/models/countryBasic.model'
import { viewState } from '../shared/global-config/encapsulation'

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css'],
  encapsulation: viewState
})
export class CountryInfoComponent implements OnInit {
    
  @Input("country") currentCountry:CountryBasic;
  @Output() onSelectCountry:EventEmitter<CountryBasic>=new EventEmitter<CountryBasic>();
  
  constructor() { }
    updateCountrySelection():void{
      this.onSelectCountry.emit(this.currentCountry);
      console.log(this.currentCountry);
    }


    ngOnInit() {
    }

}
