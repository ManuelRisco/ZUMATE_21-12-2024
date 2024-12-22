import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPresencialComponent } from './lista-presencial.component';

describe('ListaPatrocinarComponent', () => {
  let component: ListaPresencialComponent;
  let fixture: ComponentFixture<ListaPresencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPresencialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPresencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
