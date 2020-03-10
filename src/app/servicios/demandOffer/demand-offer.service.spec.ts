import { TestBed } from '@angular/core/testing';

import { DemandOfferService } from './demand-offer.service';

describe('DemandOfferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandOfferService = TestBed.get(DemandOfferService);
    expect(service).toBeTruthy();
  });
});
