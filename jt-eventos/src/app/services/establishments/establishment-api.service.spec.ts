import { TestBed } from '@angular/core/testing';

import { EstablishmentApiService } from './establishment-api.service';

describe('EstablishmentApiService', () => {
  let service: EstablishmentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstablishmentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
