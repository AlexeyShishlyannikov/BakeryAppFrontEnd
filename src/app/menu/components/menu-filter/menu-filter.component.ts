import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-filter',
  templateUrl: './menu-filter.component.html',
  styleUrls: ['./menu-filter.component.css']
})
export class MenuFilterComponent {
  selected = 'All';
  types: string[] = [
    'All',
    'Cake',
    'Cupcake',
    'Macaron'
  ];
  @Output('selectedType') selectedType: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  outputFilter(type: string): void {
    this.selected = type;
    this.selectedType.emit(type);
  }
}
