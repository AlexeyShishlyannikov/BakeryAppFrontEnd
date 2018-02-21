import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFaqListsComponent } from './admin-faq-lists.component';

describe('AdminFaqListsComponent', () => {
  let component: AdminFaqListsComponent;
  let fixture: ComponentFixture<AdminFaqListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFaqListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFaqListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
