import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../../shared/models/menuItem';
import { Price, PricePerSet } from '../../../shared/models/Price';
import { MenuItemService } from '../../../item/services/menu-item.service';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css']
})
export class MenuListItemComponent implements OnInit {
  @Input('isMetric') isMetric: boolean;
  @Input('menuItem') menuItem: MenuItem;
  photoData: string;

  constructor(public menuItemService: MenuItemService) {
  }

  ngOnInit() {

  }
}
