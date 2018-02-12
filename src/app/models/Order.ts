import { User } from './User';
import { MenuItem } from './menuItem';
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
