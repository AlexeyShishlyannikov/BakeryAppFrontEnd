import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIngredientFormComponent } from './admin-ingredient-form.component';

describe('AdminIngredientFormComponent', () => {
  let component: AdminIngredientFormComponent;
  let fixture: ComponentFixture<AdminIngredientFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIngredientFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIngredientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
