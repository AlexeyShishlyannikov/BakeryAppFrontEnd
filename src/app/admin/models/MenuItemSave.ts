import { Price } from '../../shared/models/Price';
import { MenuItem } from 'shared/models/menuItem';
export class MenuItemSave {
  name: string = null;
  type: string = null;
  minimumWeight: number = null;
  description: string = null;
  price: Price = {
    cakePricePerPound: null,
    cakePricePerKg: null,
    pricePerSet: []
  };
  ingredients: number[] = [];

  mapFromItem(item: MenuItem): void {
    this.name = item.name;
    this.description = item.description;
    this.minimumWeight = item.minimumWeight;
    this.price = item.price;
    this.type = item.type;
    item.ingredients.forEach(ing => {
      this.ingredients.push(ing.id);
    });
  }
}
