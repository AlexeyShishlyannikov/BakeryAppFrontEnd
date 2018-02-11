import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../models/menuItem';
import { Price, PricePerSet } from '../models/Price';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css']
})
export class MenuListItemComponent implements OnInit {
  @Input('menuItem') menuItem: MenuItem;
  photoData: string;
  @Input('isMetric') isMetric: boolean;
  constructor() { }

  ngOnInit() {
    this.photoData = `data:${this.menuItem.photos[0].contentType};base64,${this.menuItem.photos[0].data}`;
  }

  get price() {
    const price: Price = this.menuItem.price;
    switch (this.menuItem.type) {
      case 'Cake':
        return !this.isMetric === true ? price.cakePricePerPound + '/lb' : price.cakePricePerKg + '/kg';
      default:
        price.pricePerSet.sort((a: PricePerSet, b: PricePerSet) => {
          return a.setPrice - b.setPrice;
        });
        return `${price.pricePerSet[0].setPrice}/${price.pricePerSet[0].setSize}pc`;
    }
  }

  get minimumWeight() {
    const mw = this.menuItem.minimumWeight;
    return this.isMetric ? mw * 0.453 + ' kg' : mw * 1 + ' lb';
  }
}
