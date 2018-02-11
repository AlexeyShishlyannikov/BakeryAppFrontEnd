import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuItem } from '../models/menuItem';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit, OnDestroy {
  menu: MenuItem[] = [];
  isMetric = false;
  subscription: Subscription;
  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.populateMenu();
  }

  private populateMenu() {
    this.subscription = this.menuService
      .getMenu()
      .subscribe(menu => {
        this.menu = menu;
      },
        err => {
          console.log(err);
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
