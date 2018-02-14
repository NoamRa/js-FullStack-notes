import { User } from './user.model';
import { ValidConfig } from '../../validators/validConfig.model';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { appConsts } from '../../global-config/consts'

export class Register extends User{
    
    constructor(){
      super()    
    }
    firstName:string;
    lastName:string;
    age:number;
    country:string;

  static get userNameValidators(): ValidatorFn[] {
    return [
      ValidConfig.required("User name"),
      ValidConfig.minLength(appConsts.MIN_CHARS_USER_NAME, "User name"),
      ValidConfig.maxLength(appConsts.MAX_CHARS_USER_NAME, "User name"),
      ValidConfig.onlyEnglish("User name"),

    ]
  }

  static get userPasswordValidators(): ValidatorFn[] {
    return [
      ValidConfig.required("Password"),
      ValidConfig.minLength(appConsts.MIN_CHARS_USER_PASSWORD, "Password"),
      ValidConfig.maxLength(appConsts.MAX_CHARS_USER_PASSWORD, "Password"),
      ValidConfig.onlyEnglishNumbersStar("Password")

    ]
  }

  static get userFirstNameValidators(): ValidatorFn[] {
    return [
      ValidConfig.required("First Name"),
      ValidConfig.onlyEnglish("First Name")
    ]
  }

  static get userLastNameValidators(): ValidatorFn[] {
    return [
      ValidConfig.required("Last Name"),
      ValidConfig.onlyEnglish("Last Name")
    ]
  }

  static get ageValidators(): ValidatorFn[] {
    return [
    ]
  }

}