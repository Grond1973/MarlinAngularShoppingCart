import { TestBed } from '@angular/core/testing';

import { CartmessageService } from './cartmessage.service';

describe('CartmessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartmessageService = TestBed.get(CartmessageService);
    expect(service).toBeTruthy();
  });
});
