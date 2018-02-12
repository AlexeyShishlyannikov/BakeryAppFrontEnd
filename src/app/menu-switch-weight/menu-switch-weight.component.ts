import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-switch-weight',
  templateUrl: './menu-switch-weight.component.html',
  styleUrls: ['./menu-switch-weight.component.css']
})
export class MenuSwitchWeightComponent {
  selected = false;
  @Output('isMetric') isMetric: EventEmitter<boolean> = new EventEmitter<boolean>();

  switchWeight(isMetric: boolean): void {
    this.selected = isMetric;
    this.isMetric.emit(this.selected);
  }
}
