import { AbstractControl, ValidatorFn } from '@angular/forms';

export class ValidConfig {

  private static counter = 0;
  private static get key(): string {
    return `error_${ValidConfig.counter++}`;
  }

  static required(something:string, 
                  errorMessage = `${something} is a required field.`):ValidatorFn {
    return (formControl) => (formControl.value === undefined || formControl.value === null || formControl.value === "") ? { [ValidConfig.key]: errorMessage } : null;
  }

  static minLength(length:number, 
                    something:string, 
                    errorMessage = `${something}'s length can't be shorter than ${length} characters`):ValidatorFn {
    return (formControl) => (formControl.value.length < length) ? { [ValidConfig.key]: errorMessage } : null;
  }

  static maxLength(length:number, 
                    something:string, 
                    errorMessage = `${something}'s length can't exceed ${length} characters`):ValidatorFn {
    return (formControl) => (formControl.value.length >= length) ? { [ValidConfig.key]: errorMessage } : null;
  }

  static nonNegative(length:number, 
                      something:string, 
                      errorMessage = `${something} can't be negative`):ValidatorFn {
    return (formControl) => (formControl.value.length < 0) ? { [ValidConfig.key]: errorMessage } : null;
  }

  static onlyEnglish(something:string, 
                      errorMessage = `${something} can only contain English characters`):ValidatorFn {
    return (formControl) => (!/^[a-zA-Z]*$/.test(formControl.value)) ? { [ValidConfig.key]: errorMessage } : null;
  }

  static onlyEnglishNumbersStar(something:string, 
                      errorMessage = `${something} can only contain English characters, numbers and '*'`):ValidatorFn {
    return (formControl) => (!/^[a-zA-Z\d\*]*$/.test(formControl.value)) ? { [ValidConfig.key]: errorMessage } : null;
  }

  static validEmail(something:string, 
                    errorMessage = `${something} is not a valid eMail address`):ValidatorFn {
    return (formControl) => (!/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(formControl.value)) ? { [ValidConfig.key]: errorMessage } : null;
  }

  generateUniqueKey(){

  }




}
