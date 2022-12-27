import { Observable } from 'rxjs';
import { Customer } from '../data/customer';

export abstract class CustomerRepository {
  abstract put(customer: Customer): void;
  abstract delete(customer: Customer): void;
  abstract exists(customer: Customer): boolean;
  abstract data(): Observable<Customer[]>;
}
