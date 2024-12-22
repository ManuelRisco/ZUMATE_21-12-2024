import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolatadaComponent } from './chocolatada.component';

describe('ChocolatadaComponent', () => {
  let component: ChocolatadaComponent;
  let fixture: ComponentFixture<ChocolatadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChocolatadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChocolatadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
