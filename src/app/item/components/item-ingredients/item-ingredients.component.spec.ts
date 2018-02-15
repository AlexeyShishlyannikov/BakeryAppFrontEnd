import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIngredientsComponent } from './item-ingredients.component';

describe('ItemIngredientsComponent', () => {
  let component: ItemIngredientsComponent;
  let fixture: ComponentFixture<ItemIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
