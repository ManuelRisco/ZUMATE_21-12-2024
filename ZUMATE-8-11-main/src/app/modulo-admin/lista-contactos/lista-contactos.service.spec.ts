import { TestBed } from '@angular/core/testing';

import { ListaContactosService } from './lista-contactos.service';

describe('ListaContactosService', () => {
  let service: ListaContactosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaContactosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
