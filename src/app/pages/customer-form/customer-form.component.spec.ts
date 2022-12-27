import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerPoolService } from '../../services/customer-pool.service';

import { CustomerFormComponent } from './customer-form.component';

describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;

  let customerPoolService: jasmine.SpyObj<CustomerPoolService>;

  let setupMock = async (
    serviceReturnValues: jasmine.SpyObjMethodNames<CustomerPoolService>
  ) => {
    // TODO mock the service
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ');
});
