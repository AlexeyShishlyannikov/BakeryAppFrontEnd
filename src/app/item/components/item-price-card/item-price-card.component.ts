import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItemService } from '../../services/menu-item.service';
import { MenuItem } from '../../../shared/models/menuItem';

@Component({
  selector: 'app-item-price-card',
  templateUrl: './item-price-card.component.html',
  styleUrls: ['./item-price-card.component.css']
})
export class ItemPriceCardComponent {
  @Output('isMetric') isMetric: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input('item') item: MenuItem;
  selected: boolean;
  constructor(
    public menuItemService: MenuItemService
  ) { }
  public switchWeight(isMetric: boolean) {
    this.selected = isMetric;
    this.isMetric.emit(isMetric);
  }
}
