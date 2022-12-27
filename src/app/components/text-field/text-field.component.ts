import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextFieldComponent,
    },
  ],
})
export class TextFieldComponent implements OnInit, ControlValueAccessor {
  @Input() type: 'text' | 'password' | 'number' | 'date' = 'text';
  @Input() hasError?: boolean;
  @Input() errorText?: string;
  @Input() title?: string;

  @Input() formControlName: string | number | null = null;

  value: any = '';
  touched: boolean = false;
  disabled: boolean = false;

  constructor() {}
  writeValue(obj: string): void {
    this.value = obj;
  }
  onChange = (value: string) => {};
  onTouched = () => {};

  registerOnChange(onChange: (s: string) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {}

  onValueChange(event: Event) {
    this.markAsTouched();
    this.onChange((event.target as HTMLInputElement).value);
  }
}
