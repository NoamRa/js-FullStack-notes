import { User } from './user.model';
import { ValidConfig } from '../../validators/validConfig.model';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { appConsts } from '../../global-config/consts'

export class Login {

  constructor(public userName:string, 
              public userPassword:string) {
  }

  static get userNameValidators(): ValidatorFn[] {
    return [
      ValidConfig.required("User name"),
      ValidConfig.minLength(appConsts.MIN_CHARS_USER_NAME, "User name"),
      ValidConfig.maxLength(appConsts.MAX_CHARS_USER_NAME, "User name")

    ]
  }

  static get userPasswordValidators(): ValidatorFn[] {
    return [
      ValidConfig.required("Password"),
      ValidConfig.minLength(appConsts.MIN_CHARS_USER_PASSWORD, "Password"),
      ValidConfig.maxLength(appConsts.MAX_CHARS_USER_PASSWORD, "Password")

    ]
  }

}