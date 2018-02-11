import { Price } from './price';
import { Ingredient } from './Ingredient';
import { Photo } from './Photo';


export interface MenuItem {
  id: number;
  name: string;
  type: string;
  minimumWeight: number;
  description: string;
  price: Price;
  photos: Photo[];
  ingredients: Ingredient[];
}
export interface MenuItemSave {
  name: string;
  type: string;
  minimumWeight: number;
  description: string;
  price: Price;
  ingredients: number[];
}
