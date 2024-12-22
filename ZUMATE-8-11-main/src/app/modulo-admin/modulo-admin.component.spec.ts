import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloAdminComponent } from './modulo-admin.component';

describe('ModuloAdminComponent', () => {
  let component: ModuloAdminComponent;
  let fixture: ComponentFixture<ModuloAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuloAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
