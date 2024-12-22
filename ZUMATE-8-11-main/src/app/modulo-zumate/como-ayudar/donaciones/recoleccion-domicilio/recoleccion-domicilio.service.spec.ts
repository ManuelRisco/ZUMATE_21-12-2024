import { TestBed } from '@angular/core/testing';

import { RecoleccionDomicilioService } from './recoleccion-domicilio.service';

describe('RecoleccionDomicilioService', () => {
  let service: RecoleccionDomicilioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoleccionDomicilioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
