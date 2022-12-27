import { Customer } from '../../data/customer';

export function mapObjectToCustomer(customerData: any): Customer {
  return {
    ...customerData,
    dateOfBirth: new Date(customerData.dateOfBirth),
  };
}
