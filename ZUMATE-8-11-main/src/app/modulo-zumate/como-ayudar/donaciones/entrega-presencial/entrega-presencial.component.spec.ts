import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaPresencialComponent } from './entrega-presencial.component';

describe('EntregaPresencialComponent', () => {
  let component: EntregaPresencialComponent;
  let fixture: ComponentFixture<EntregaPresencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntregaPresencialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntregaPresencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
