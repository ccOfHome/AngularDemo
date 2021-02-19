import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
function forbiddenNameValidator(nameReg: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = nameReg.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenValidatorDirective,
      multi: true,
    },
  ],
})

export class ForbiddenValidatorDirective implements Validator {
  @Input() appForbiddenName: string;
  validate(control: AbstractControl): { [key: string]: any } {
    return this.appForbiddenName
      ? forbiddenNameValidator(new RegExp(this.appForbiddenName, 'i'))(control)
      : null;
  }
}
