import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaPasantiaComponent } from './programa-pasantia.component';

describe('ProgramaPasantiaComponent', () => {
  let component: ProgramaPasantiaComponent;
  let fixture: ComponentFixture<ProgramaPasantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramaPasantiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaPasantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
