import { TestBed } from '@angular/core/testing';

import { EventTypeApiService } from './event-type-api.service';

describe('EventTypeApiService', () => {
  let service: EventTypeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventTypeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
