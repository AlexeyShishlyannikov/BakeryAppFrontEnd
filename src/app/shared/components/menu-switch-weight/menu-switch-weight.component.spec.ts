import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSwitchWeightComponent } from './menu-switch-weight.component';

describe('MenuSwitchWeightComponent', () => {
  let component: MenuSwitchWeightComponent;
  let fixture: ComponentFixture<MenuSwitchWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSwitchWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSwitchWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
