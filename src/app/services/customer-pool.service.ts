import { Injectable } from '@angular/core';
import { Customer } from '../data/customer';
import { LocalStorageCustomerRepository } from '../repositories/customer-repository-impl';

@Injectable({
  providedIn: 'root',
})
export class CustomerPoolService {
  constructor(private customerRepo: LocalStorageCustomerRepository) {}

  save(customer: Customer): void | never {
    this.customerRepo.put(customer);
  }

  delete(customer: Customer): void {
    this.customerRepo.delete(customer);
  }

  canSave(customer: Customer): boolean {
    return this.customerRepo.exists(customer);
  }
}
