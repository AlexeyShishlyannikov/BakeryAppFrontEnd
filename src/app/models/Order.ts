import { User } from './User';
import { MenuItem } from './MenuItem';
export interface Order {
  id: number;
  clientId: number;
  client: User;
  menuItems: MenuItem[];
  delivered: boolean;
}

export interface OrderSave {
  id: number;
  clientId: number;
  client: User;
  menuItems: number[];
  delivered: boolean;
}
