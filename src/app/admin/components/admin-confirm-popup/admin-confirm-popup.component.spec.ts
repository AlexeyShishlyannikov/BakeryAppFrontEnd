import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConfirmPopupComponent } from './admin-confirm-popup.component';

describe('AdminConfirmPopupComponent', () => {
  let component: AdminConfirmPopupComponent;
  let fixture: ComponentFixture<AdminConfirmPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConfirmPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
