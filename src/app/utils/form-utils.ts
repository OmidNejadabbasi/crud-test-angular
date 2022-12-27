import { AbstractControl } from '@angular/forms';

export function hasError(formControl: AbstractControl) {
  return formControl.invalid && (formControl.dirty || formControl.touched);
}
