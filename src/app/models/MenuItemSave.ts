import { Price } from './Price';
export interface MenuItemSave {
  name: string;
  type: string;
  minimumWeight: number;
  description: string;
  price: Price;
  ingredients: number[];
}
