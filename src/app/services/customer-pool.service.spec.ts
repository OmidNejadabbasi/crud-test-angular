import { TestBed } from '@angular/core/testing';

import { CustomerPoolService } from './customer-pool.service';

describe('CustomerPoolServiceService', () => {
  let service: CustomerPoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerPoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
