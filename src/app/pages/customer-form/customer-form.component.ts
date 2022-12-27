import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../data/customer';
import { mapObjectToCustomer } from '../../repositories/mappers/customer-mapper';
import { CustomerPoolService } from '../../services/customer-pool.service';
import { hasError } from '../../utils/form-utils';
import { numberValidatorOfRegion } from '../../validators/phone-number-validator';

const { required, pattern, maxLength, email } = Validators;
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  customerList: Customer[] = [];

  form: FormGroup = this.formBuilder.group({
    firstName: ['', [required, pattern('[a-zA-Z0-9.]+'), maxLength(50)]],
    lastName: ['', [required, pattern('[a-zA-Z0-9.]+'), maxLength(50)]],
    dateOfBirth: [new Date(), [required]],
    phoneNumber: ['', numberValidatorOfRegion('IR')],
    email: ['', [required, email]],
    bankAccountNum: [
      '',
      [required, pattern('[1-9]{4}-?[1-9]{4}-?[1-9]{4}-?[1-9]{4}')],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private customerPoolService: CustomerPoolService
  ) {}

  ngOnInit(): void {
    this.customerPoolService.data().subscribe((data) => {
      this.customerList = data;
    });
  }
  hasError = hasError;

  onSave() {
    if (!this.form.valid) return;
    try {
      const customer: Customer = mapObjectToCustomer(this.form.value);
      console.log(customer);

      this.customerPoolService.save(customer);
    } catch (err) {
      console.log('Email Already Exists');
      console.log(err);
    }
  }
}
