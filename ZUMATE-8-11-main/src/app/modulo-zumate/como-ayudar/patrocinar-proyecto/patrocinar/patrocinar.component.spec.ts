import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinarComponent } from './patrocinar.component';

describe('PatrocinarComponent', () => {
  let component: PatrocinarComponent;
  let fixture: ComponentFixture<PatrocinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatrocinarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrocinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
