import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloZumateComponent } from './modulo-zumate.component';

describe('ModuloZumateComponent', () => {
  let component: ModuloZumateComponent;
  let fixture: ComponentFixture<ModuloZumateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuloZumateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloZumateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
