import { Price } from '../../shared/models/Price';
export interface MenuItemSave {
  name: string;
  type: string;
  minimumWeight: number;
  description: string;
  price: Price;
  ingredients: number[];
}
