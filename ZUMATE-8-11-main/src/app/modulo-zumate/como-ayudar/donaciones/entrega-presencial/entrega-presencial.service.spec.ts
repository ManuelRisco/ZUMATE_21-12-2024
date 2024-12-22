import { TestBed } from '@angular/core/testing';

import { EntregaPresencialService } from './entrega-presencial.service';

describe('EntregaPresencialService', () => {
  let service: EntregaPresencialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntregaPresencialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
