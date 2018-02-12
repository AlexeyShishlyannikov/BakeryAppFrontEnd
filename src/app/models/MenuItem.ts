import { Price } from './price';
import { Ingredient } from './Ingredient';
import { Photo } from './Photo';
import { PricePerSet } from './Price';
import { Injectable } from '@angular/core';

export class MenuItem {
  id: number;
  name: string;
  type: string;
  minimumWeight: number;
  description: string;
  price: Price;
  photos: Photo[];
  ingredients: Ingredient[];

  constructor() {}

  public getPrice(isMetric = false) {
    const price: Price = this.price;
    switch (this.type) {
      case 'Cake':
        return !isMetric === true ? price.cakePricePerPound + '/lb' : price.cakePricePerKg + '/kg';
      default:
        price.pricePerSet.sort((a: PricePerSet, b: PricePerSet) => {
          return a.setPrice - b.setPrice;
        });
        return `${price.pricePerSet[0].setPrice}/${price.pricePerSet[0].setSize}pc`;
    }
  }

  public getMinimumWeight(isMetric = false) {
    const mw = this.minimumWeight;
    return isMetric ? mw * 0.453 + ' kg' : mw * 1 + ' lb';
  }

  public getMinimalPrice() {
    switch (this.type) {
      case 'Cake':
        const price = +this.getPrice().substring(0, this.getPrice().lastIndexOf(' ') + 1);
        const minWeight = +this.getMinimumWeight().substring(0, this.getMinimumWeight().lastIndexOf(' ') + 1);
        const minPrice = price * minWeight;
        return `Price for ${this.minimumWeight} is ${minPrice}$`;
      default:
        return null;
    }
  }
}

