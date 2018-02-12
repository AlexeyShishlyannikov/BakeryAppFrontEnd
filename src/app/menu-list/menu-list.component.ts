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
  menuFiltered: MenuItem[];
  isMetric = false;
  subscription: Subscription;
  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.populateMenu();
  }

  public switchWeight(isMetric: boolean) {
    this.isMetric = isMetric;
  }

  private populateMenu() {
    this.subscription = this.menuService
      .getMenu()
      .subscribe(menu => {
        this.menu = this.menuFiltered = menu;
      },
        err => {
          console.log(err);
        });
  }

  private filterMenu(filterType: string) {
    if (filterType === 'All') {
      this.menuFiltered = this.menu;
    } else {
      this.menuFiltered = this.menu
        .filter(item => item.type === filterType);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
