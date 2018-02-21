import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../../shared/models/menuItem';
import { Subscription } from 'rxjs/Subscription';
import { ProgressService } from '../../../shared/services/progress.service';

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
  weightToggle = true;
  constructor(
    private menuService: MenuService,
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

  public filterMenu(filterType: string) {
    if (filterType === 'All') {
      this.weightToggle = true;
      this.menuFiltered = this.menu;
    } else {
      filterType === 'Cake' ? this.weightToggle = true : this.weightToggle = false;
      this.menuFiltered = this.menu
        .filter(item => item.type === filterType);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
