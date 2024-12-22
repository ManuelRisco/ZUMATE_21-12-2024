import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPatrocinarComponent } from './lista-patrocinar.component';

describe('ListaPatrocinarComponent', () => {
  let component: ListaPatrocinarComponent;
  let fixture: ComponentFixture<ListaPatrocinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPatrocinarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPatrocinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
