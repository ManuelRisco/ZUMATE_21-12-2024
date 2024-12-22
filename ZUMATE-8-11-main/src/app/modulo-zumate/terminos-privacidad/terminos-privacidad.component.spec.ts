import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosPrivacidadComponent } from './terminos-privacidad.component';

describe('TerminosPrivacidadComponent', () => {
  let component: TerminosPrivacidadComponent;
  let fixture: ComponentFixture<TerminosPrivacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerminosPrivacidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminosPrivacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
