import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinarProyectoComponent } from './patrocinar-proyecto.component';

describe('PatrocinarProyectoComponent', () => {
  let component: PatrocinarProyectoComponent;
  let fixture: ComponentFixture<PatrocinarProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatrocinarProyectoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrocinarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
