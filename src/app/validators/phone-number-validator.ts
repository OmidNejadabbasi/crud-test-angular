import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

export function numberValidatorOfRegion(region: string): ValidatorFn {
  function isValid(number: string) {
    try {
      return phoneUtil.isValidNumberForRegion(
        phoneUtil.parse(number, region),
        region
      );
    } catch (error) {
      return false;
    }
  }
  return (control: AbstractControl): ValidationErrors | null => {
    const _isValid = isValid(control.value);
    return !_isValid ? { badFormatNum: { value: control.value } } : null;
  };
}
