import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPriceCalcComponent } from './item-price-calc.component';

describe('ItemPriceCalcComponent', () => {
  let component: ItemPriceCalcComponent;
  let fixture: ComponentFixture<ItemPriceCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPriceCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPriceCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
