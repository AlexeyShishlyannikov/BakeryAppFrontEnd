import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPriceCardComponent } from './item-price-card.component';

describe('ItemPriceCardComponent', () => {
  let component: ItemPriceCardComponent;
  let fixture: ComponentFixture<ItemPriceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPriceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPriceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
