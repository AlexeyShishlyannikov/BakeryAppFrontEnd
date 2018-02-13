import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../../../shared/models/menuItem';
import { Subscription } from 'rxjs/Subscription';
import { MenuService } from '../../../menu/services/menu.service';
import 'rxjs/add/operator/switchMap';
import { Photo } from '../../../shared/models/Photo';
import { MenuItemService } from '../../services/menu-item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  itemSubscription: Subscription;
  ingredienSubscription: Subscription;
  id: number;
  item: MenuItem;
  isMetric = false;
  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    public menuItemService: MenuItemService
  ) { }

  ngOnInit() {
    this.getItem();
  }

  private getItem(): void {
    this.itemSubscription = this.route.paramMap
      .switchMap(params => {
      this.id = +params.get('id');
      return this.menuService.getMenuItem(this.id);
    })
    .subscribe(item => {
      this.item = item;
    });
  }
  public switchWeight(isMetric: boolean) {
    this.isMetric = isMetric;
  }
  ngOnDestroy() {
    this.itemSubscription.unsubscribe();
  }
}
