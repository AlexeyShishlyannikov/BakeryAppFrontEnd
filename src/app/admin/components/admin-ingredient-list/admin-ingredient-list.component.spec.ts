import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIngredientListComponent } from './admin-ingredient-list.component';

describe('AdminIngredientListComponent', () => {
  let component: AdminIngredientListComponent;
  let fixture: ComponentFixture<AdminIngredientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIngredientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIngredientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
