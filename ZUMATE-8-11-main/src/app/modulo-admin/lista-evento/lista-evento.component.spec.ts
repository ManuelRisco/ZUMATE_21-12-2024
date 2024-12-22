import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventoComponent } from './lista-evento.component';

describe('ListaChocolatadaComponent', () => {
  let component: ListaEventoComponent;
  let fixture: ComponentFixture<ListaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
