import { Component, OnInit } from '@angular/core';
import { Register } from '../shared/models/register.model';
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
    this.countryService.getCountries().subscribe(
      (res:CountryBasic[])=> {this.countryList=res}
    );
  }

}