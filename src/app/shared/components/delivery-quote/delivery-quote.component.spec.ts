import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryQuoteComponent } from './delivery-quote.component';

describe('DeliveryQuoteComponent', () => {
  let component: DeliveryQuoteComponent;
  let fixture: ComponentFixture<DeliveryQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
