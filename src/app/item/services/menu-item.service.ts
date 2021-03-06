import { Injectable } from '@angular/core';
import { MenuItem } from '../../shared/models/menuItem';
import { Price, PricePerSet } from '../../shared/models/Price';

@Injectable()
export class MenuItemService {
  private lb_kg = 1 / 2.2;
  constructor() { }

  getPrice(menuItem: MenuItem, isMetric: boolean = false): string {
    const price: Price = menuItem.price;
    switch (menuItem.type) {
      case 'Cake':
        return !isMetric === true ? price.cakePricePerPound + '$/lb' : (price.cakePricePerPound / this.lb_kg) + '$/kg';
      default:
        return `${price.pricePerSet[0].setPrice}$/${price.pricePerSet[0].setSize}pc`;
    }
  }

  getMinimumWeight(menuItem: MenuItem, isMetric: boolean = false): number {
    const mw = menuItem.minimumWeight;
    return isMetric ? mw * this.lb_kg : mw * 1;
  }

  getMinimalPrice(menuItem: MenuItem): string {
    switch (menuItem.type) {
      case 'Cake':
        const minWeight = menuItem.minimumWeight;
        const minPrice = menuItem.price.cakePricePerPound * minWeight;
        return `Price for ${minWeight}lb is ${minPrice}$`;
      default:
        return null;
    }
  }
}
