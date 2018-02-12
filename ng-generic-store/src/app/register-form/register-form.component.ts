import { Component, OnInit } from '@angular/core';
import { User, Register, Login } from '../shared/models/account-models/index';
import { CountryService } from '../shared/services/country.service';
import { CountryBasic } from '../shared/models/countryBasic.model'

 
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  newUser = new Register()
  countryList:Array<any>;
  
  constructor(private countryService:CountryService) { }

  ngOnInit() {
    this.countryService.getCountriesAndFlags().subscribe(
      (res:CountryBasic[])=> {this.countryList=res}
    );
  }

}
