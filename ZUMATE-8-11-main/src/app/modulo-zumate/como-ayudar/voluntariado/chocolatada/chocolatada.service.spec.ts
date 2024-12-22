import { TestBed } from '@angular/core/testing';

import { ChocolatadaService } from './chocolatada.service';

describe('ChocolatadaService', () => {
  let service: ChocolatadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChocolatadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
