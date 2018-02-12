import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../models/menuItem';
import { Price, PricePerSet } from '../models/Price';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css']
})
export class MenuListItemComponent implements OnInit {
  @Input('isMetric') isMetric: boolean;
  @Input('menuItem') menuItem: MenuItem;
  photoData: string;
  constructor() { }

  ngOnInit() {
    this.photoData = `data:${this.menuItem.photos[0].contentType};base64,${this.menuItem.photos[0].data}`;
  }
}
