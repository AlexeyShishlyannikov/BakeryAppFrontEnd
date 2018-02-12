import { Injectable } from '@angular/core';
import { MenuItem } from './models/menuItem';
import { Price, PricePerSet } from './models/Price';

@Injectable()
export class MenuItemService {

  constructor() { }

  getPrice(menuItem: MenuItem, isMetric: boolean = false): string {
    const price: Price = menuItem.price;
    switch (menuItem.type) {
      case 'Cake':
        return !isMetric === true ? price.cakePricePerPound + '/lb' : price.cakePricePerKg + '/kg';
      default:
        price.pricePerSet.sort((a: PricePerSet, b: PricePerSet) => {
          return a.setPrice - b.setPrice;
        });
        return `${price.pricePerSet[0].setPrice}/${price.pricePerSet[0].setSize}pc`;
    }
  }

  getMinimumWeight(menuItem: MenuItem, isMetric: boolean = false): string {
    const mw = menuItem.minimumWeight;
    return isMetric ? mw * 0.453 + ' kg' : mw * 1 + ' lb';
  }

  getMinimalPrice(menuItem: MenuItem): string {
    switch (menuItem.type) {
      case 'Cake':
        const priceString = this.getPrice(menuItem);
        const price = +priceString.substring(0, priceString.lastIndexOf(' ') + 1);
        const minWeightString = this.getMinimumWeight(menuItem);
        const minWeight = +minWeightString.substring(0, minWeightString.lastIndexOf(' ') + 1);
        const minPrice = price * minWeight;
        return `Price for ${minWeight} is ${minPrice}$`;
      default:
        return null;
    }
  }
}
