import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaChocolatadaComponent } from './lista-chocolatada.component';

describe('ListaChocolatadaComponent', () => {
  let component: ListaChocolatadaComponent;
  let fixture: ComponentFixture<ListaChocolatadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaChocolatadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaChocolatadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
