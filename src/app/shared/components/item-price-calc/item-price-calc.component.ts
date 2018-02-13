import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../models/menuItem';
import { MenuItemService } from '../../../item/services/menu-item.service';

@Component({
  selector: 'app-item-price-calc',
  templateUrl: './item-price-calc.component.html',
  styleUrls: ['./item-price-calc.component.css']
})
export class ItemPriceCalcComponent implements OnInit {
  @Input('item') item: MenuItem;
  @Input('isMetric') isMetric: boolean;
  @Output('setPrice') setPrice: EventEmitter<number> = new EventEmitter<number>();
  totalPrice: number;
  minimumWeight: number;
  minimumPrice: number;
  input: number;
  constructor(
    public menuItemService: MenuItemService
  ) { }

  ngOnInit() {
    this.minimumWeight = !this.isMetric ? this.item.minimumWeight : this.item.minimumWeight * 0.453;
    this.totalPrice = this.minimumPrice = this.item.minimumWeight * this.item.price.cakePricePerPound;
  }

  calcPrice(input: number) {
    const perUnit = !this.isMetric ? this.item.price.cakePricePerPound : this.item.price.cakePricePerKg;

    this.totalPrice = perUnit * input;
    if (this.totalPrice >= this.minimumPrice) {
      this.setPrice.emit(this.totalPrice);
    }
  }
}
