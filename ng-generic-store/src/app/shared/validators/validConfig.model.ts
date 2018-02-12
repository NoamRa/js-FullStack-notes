import { AbstractControl, ValidatorFn } from '@angular/forms';

export class ValidConfig {
  private static counter = 0;
  private static get key(): string {
    return "error_"+ValidConfig.counter++;
  }

  static required(errorMessage = "This field is required."):ValidatorFn {
    return (formControl) => (formControl.value || formControl.value === null || formControl.value === "") ? { [ValidConfig.key]: errorMessage }
  }

  static minLength(length:number, errorMessage = `Length can't be shorter than ${length} characters`):ValidatorFn {
    return (formControl) => (formControl.value < length) ? { [ValidConfig.key]: errorMessage } : null;
  }

  static maxLength(length:number, errorMessage = `Length can't exceed ${length} characters`):ValidatorFn {
    return (formControl) => (formControl.value > length) ? { [ValidConfig.key]: errorMessage } : null;
  }  

  static nonNegative(length:number, errorMessage = `Length can't exceed ${length} characters`):ValidatorFn {
    return (formControl) => (formControl.value < 0) ? { [ValidConfig.key]: errorMessage } : null;
  }  

  generateUniqueKey(){

  }




}
