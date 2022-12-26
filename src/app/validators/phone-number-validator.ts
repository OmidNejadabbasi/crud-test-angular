import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

export function numberValidatorOfRegion(region: string): ValidatorFn {
  function isValid(number: string) {
    return phoneUtil.isValidNumberForRegion(
      phoneUtil.parse('202-456-1414', region),
      region
    );
  }
  return (control: AbstractControl): ValidationErrors | null => {
    const _isValid = isValid(control.value);
    return _isValid ? { badFormatNum: { value: control.value } } : null;
  };
}
