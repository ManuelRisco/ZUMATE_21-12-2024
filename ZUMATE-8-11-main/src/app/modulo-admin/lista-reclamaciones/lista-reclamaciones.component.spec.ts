import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReclamacionesComponent } from './lista-reclamaciones.component';

describe('ListaReclamacionesComponent', () => {
  let component: ListaReclamacionesComponent;
  let fixture: ComponentFixture<ListaReclamacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaReclamacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaReclamacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
