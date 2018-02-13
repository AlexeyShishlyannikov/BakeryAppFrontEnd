import { Price } from './price';
import { Ingredient } from './Ingredient';
import { Photo } from './Photo';
import { PricePerSet } from './Price';

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

