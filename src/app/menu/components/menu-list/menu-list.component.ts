import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../../shared/models/menuItem';
import { Subscription } from 'rxjs/Subscription';
import { ProgressService } from '../../../shared/services/progress.service';
import { animations } from './menu-list.animations';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  animations: animations
})
export class MenuListComponent implements OnInit, OnDestroy {
  public menu: MenuItem[] = [];
  public menuFiltered: MenuItem[] = [];
  public isMetric = false;
  public subscription: Subscription;
  public weightToggle = true;
  public isLoaded = false;
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
    (filterType === 'Cake' || filterType ===  'All') ? this.weightToggle = true : this.weightToggle = false;
    this.menuFiltered = [];
    if (filterType === 'All') {
      setTimeout(() => {
        this.menuFiltered = this.menu;
      }, 200);
    } else {
      setTimeout(() => {
        this.menuFiltered = this.menu
          .filter(item => item.type === filterType);
      }, 200);
    }
  }

  changeStatus(isLoaded: boolean) {
    this.isLoaded = isLoaded;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
