import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { exists } from 'fs';
import { CustomerPoolService } from '../../services/customer-pool.service';

import { CustomerFormComponent } from './customer-form.component';

describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;

  let customerPoolService: jasmine.SpyObj<CustomerPoolService>;

  let setupMock = async (
    serviceReturnValues: jasmine.SpyObjMethodNames<CustomerPoolService>
  ) => {
    customerPoolService = jasmine.createSpyObj<CustomerPoolService>({
      save: true,
      delete: true,
      canSave: false,
      ...serviceReturnValues,
    });
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

  it('should save the component on submit', () => {});
});

// export function queryByCss<T>(
//   fixture: ComponentFixture<T>,
//   selector: string,
// ): DebugElement {
//   const debugElement = fixture.debugElement.query(By.css(selector));
//   if (!debugElement) {
//     throw new Error(`queryByCss: Element with ${selector} not found`);
//   }
//   return debugElement;
// }

// export function findEl<T>(fixture: ComponentFixture<T>, testId: string): DebugElement {
//   return queryByCss<T>(fixture, testIdSelector(testId));
// }
