import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { numberValidatorOfRegion } from '../../validators/phone-number-validator';

const { required, pattern, maxLength, email } = Validators;
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    firstName: ['', [required, pattern('[a-zA-Z0-9.]+'), maxLength(50)]],
    lastName: ['', [required, pattern('[a-zA-Z0-9.]+'), maxLength(50)]],
    dateOfBirth: [Date.now(), [required]],
    phoneNumber: ['', numberValidatorOfRegion('IR')],
    email: ['', required, email],
    bankAccountNum: [
      '',
      required,
      pattern('[1-9]{4}-[1-9]{4}-[1-9]{4}-[1-9]{4}'),
    ],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
