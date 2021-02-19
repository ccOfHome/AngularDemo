import { ValidatorFn, AbstractControl } from '@angular/forms';

export function forbiddenNameValidator(nameReg: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    // 正则 res.test(val)
    const forbidden = nameReg.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
