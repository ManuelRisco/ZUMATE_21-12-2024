import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoleccionDomicilioComponent } from './recoleccion-domicilio.component';

describe('RecoleccionDomicilioComponent', () => {
  let component: RecoleccionDomicilioComponent;
  let fixture: ComponentFixture<RecoleccionDomicilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecoleccionDomicilioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoleccionDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
