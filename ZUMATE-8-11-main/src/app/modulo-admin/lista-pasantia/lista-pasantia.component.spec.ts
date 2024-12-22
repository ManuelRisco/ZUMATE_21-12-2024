import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPasantiaComponent } from './lista-pasantia.component';

describe('ListaPasantiaComponent', () => {
  let component: ListaPasantiaComponent;
  let fixture: ComponentFixture<ListaPasantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPasantiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPasantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
