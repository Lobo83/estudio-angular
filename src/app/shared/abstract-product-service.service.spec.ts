import { TestBed } from '@angular/core/testing';

import { AbstractProductServiceService } from './abstract-product-service.service';

describe('AbstractProductServiceService', () => {
  let service: AbstractProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
