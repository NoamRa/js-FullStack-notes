import { User } from './user.model';
import { ValidConfig } from '../../validators/validConfig.model';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { Consts } from '../../global-config/const'

export class Login extends User {

  constructor(public userName:string="nameOfUser", 
              public userPassword:string="......") {
    super();
  }

  static get userNameValidators(): ValidatorFn[] {
    return [
      ValidConfig.minLength(Consts.MIN_CHARS_USER_NAME),

    ]
  }


  static get userPasswordValidators(): ValidatorFn[] {
    return [
      ValidConfig.minLength(Consts.MIN_CHARS_USER_PASSWORD),

    ]
  }

}