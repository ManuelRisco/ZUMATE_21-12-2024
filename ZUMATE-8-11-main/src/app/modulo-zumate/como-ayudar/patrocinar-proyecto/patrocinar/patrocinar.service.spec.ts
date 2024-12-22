import { TestBed } from '@angular/core/testing';

import { PatrocinarService } from './patrocinar.service';

describe('PatrocinarService', () => {
  let service: PatrocinarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatrocinarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
