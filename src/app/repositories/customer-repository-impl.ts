import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Customer } from '../data/customer';
import { CustomerRepository } from './customer-repository';
import { mapObjectToCustomer } from './mappers/customer-mapper';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageCustomerRepository implements CustomerRepository {
  protected array: Customer[] = [];
  protected _data = new BehaviorSubject<Customer[]>([]);

  protected triggerDataUpdate() {
    this._data.next(this.array);
  }

  constructor() {
    const lsEntity = localStorage.getItem('customerList');

    if (lsEntity) {
      const persistedData = (JSON.parse(lsEntity) as []).map(
        mapObjectToCustomer
      );
      this._data.next(persistedData);
    }
    this._data.subscribe((data) => {
      this.array = data;
      localStorage.setItem('customerList', JSON.stringify(data));
    });
  }

  exists(customer: Customer): boolean {
    return containsWhere<Customer>(this.array, (c) => {
      const firstNameDiff: boolean = c.firstName === customer.firstName;
      const lastNameDiff: boolean = c.lastName === customer.lastName;
      console.log(c);
      console.log(customer.dateOfBirth);

      const dobDiff: boolean =
        c.dateOfBirth?.toDateString() === customer.dateOfBirth?.toDateString();

      const emailDiff: boolean = c.email === customer.email;
      return (firstNameDiff && lastNameDiff && dobDiff) || emailDiff;
    });
  }

  put(customer: Customer): boolean | never {
    const exists = this.exists(customer);
    if (exists) throw new Error('The customer already exists');

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
    if (predecate(elem) === true) {
      return true;
    }
  }
  return false;
}
