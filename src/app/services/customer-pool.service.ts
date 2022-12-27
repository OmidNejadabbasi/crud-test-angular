import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../data/customer';
import { LocalStorageCustomerRepository } from '../repositories/customer-repository-impl';

@Injectable({
  providedIn: 'root',
})
export class CustomerPoolService {
  constructor(private customerRepo: LocalStorageCustomerRepository) {}

  save(customer: Customer): boolean | never {
    return this.customerRepo.put(customer);
  }

  delete(customer: Customer): boolean {
    return this.customerRepo.delete(customer);
  }

  canSave(customer: Customer): boolean {
    return this.customerRepo.exists(customer);
  }

  data(): Observable<Customer[]> {
    return this.customerRepo.data();
  }
}
