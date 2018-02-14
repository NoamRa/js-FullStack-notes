import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { AccountService } from '../shared/services/account.service';
import { User, Register } from '../shared/models/account-models/index';
import { CountryService } from '../shared/services/country.service';
import { CountryBasic } from '../shared/models/countryBasic.model'

 
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  newUser = new Register()
  countryList: CountryBasic[];
  countryNamesList:string[];
  selectedCountry:CountryBasic;
  selectCountryMode=false;
  registerForm: FormGroup;
  
  constructor(private countryService:CountryService,
              private accountService:AccountService,
              private formBuilder: FormBuilder) { }

  createForm():void {
    this.registerForm = this.formBuilder.group({
        userNameCtrl: ['', Register.userNameValidators ],
        userPasswordCtrl: ['', Register.userPasswordValidators ],
        userFirstNameCtrl: ['', Register.userFirstNameValidators ],
        userLastNameCtrl: ['', Register.userLastNameValidators ],
    })
  }

  ngOnInit() {
    this.createForm();
    this.countryService.getCountriesAndFlags().subscribe(
      (res:CountryBasic[])=> {this.countryList=res}
    );
  }

  setCountryMode():void{
    this.selectCountryMode=!this.selectCountryMode;
  }

  setUserCountry(x:CountryBasic):void{
    this.setCountryMode();
    this.selectedCountry=x;
    this.newUser.country=x.name;
  }

  // registerUser(){
  //   this.accountService.userEvent.emit(new User(this.loginForm.value.name, ""));
  // }

}
