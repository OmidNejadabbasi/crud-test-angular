import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Customer } from '../data/customer';
import { CustomerRepository } from './customer-repository';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageCustomerRepository implements CustomerRepository {
  protected array: Customer[] = [];
  protected _data = new BehaviorSubject<Customer[]>([]);

  protected triggerDataUpdate() {
    this._data.next(this.array);
  }

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

  put(customer: Customer): boolean | never {
    if (this.exists(customer)) throw new Error('The customer already exists');

    this.array.push(customer);
    this.triggerDataUpdate();
    return true;
  }
  delete(customer: Customer): boolean {
    if (this.exists(customer)) {
      this.array = this.array.filter((e) => e.email !== customer.email);
      this.triggerDataUpdate();
      return true;
    }
    return false;
  }

  data(): Observable<Customer[]> {
    return this._data.asObservable();
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
