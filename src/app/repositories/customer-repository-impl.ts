import { Injectable } from '@angular/core';
import { Customer } from '../data/customer';
import { CustomerRepository } from './customer-repository';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageCustomerRepository implements CustomerRepository {
  array: Customer[] = [];
  exists(customer: Customer): boolean {
    return containsWhere(this.array, (c) => {
      const firstNameDiff = c.firstName === customer;
      const lastNameDiff = c.lastName === customer;
      const dobDiff =
        c.dateOfBirth?.toDateString() === customer.dateOfBirth?.toDateString();

      const emailDiff = c.email === customer.email;
      return (firstNameDiff && lastNameDiff && dobDiff) || emailDiff;
    });
  }

  put(customer: Customer): void | never {
    if (this.exists(customer)) throw new Error('The customer already exists');

    this.array.push(customer);
  }
  delete(customer: Customer): void {
    this.array = this.array.filter((e) => e.email !== customer.email);
  }
}

function containsWhere<T>(array: T[], predecate: (e: T) => boolean): boolean {
  for (const elem of array) {
    if (predecate(elem)) {
      return true;
    }
  }
  return false;
}
