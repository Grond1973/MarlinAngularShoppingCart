import { TestBed } from '@angular/core/testing';

import { CustomerStateServiceService } from './customer-state-service.service';

describe('CustomerStateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerStateServiceService = TestBed.get(CustomerStateServiceService);
    expect(service).toBeTruthy();
  });
});
