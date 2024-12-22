import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecoleccionComponent } from './lista-recoleccion.component';

describe('ListaRecoleccionComponent', () => {
  let component: ListaRecoleccionComponent;
  let fixture: ComponentFixture<ListaRecoleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaRecoleccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRecoleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
