import { Price } from '../../shared/models/Price';
import { MenuItem } from 'shared/models/menuItem';
export class MenuItemSave {
  name: string = null;
  type: string = null;
  minimumWeight = 0;
  description: string = null;
  price: Price = {
    cakePricePerPound: 0,
    cakePricePerKg: null,
    pricePerSet: [{ setPrice: 0, setSize: 0 }]
  };
  ingredients: number[] = [];

  mapFromItem(item: MenuItem): void {
    this.name = item.name;
    this.description = item.description;
    this.minimumWeight = item.minimumWeight;
    this.price = item.price;
    item.price.pricePerSet ? this.price.pricePerSet = item.price.pricePerSet : this.price.pricePerSet = [{setPrice: 0, setSize: 0}];
    this.type = item.type;
    item.ingredients.forEach(ing => {
      this.ingredients.push(ing.id);
    });
  }
}
