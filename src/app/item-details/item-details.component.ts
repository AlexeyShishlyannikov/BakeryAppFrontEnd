import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../models/MenuItem';
import { Subscription } from 'rxjs/Subscription';
import { MenuService } from '../menu.service';
import 'rxjs/add/operator/switchMap';
import { Photo } from '../models/Photo';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  id: number;
  item: MenuItem;
  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.getItem();
  }

  private getItem(): void {
    this.subscription = this.route.paramMap
      .switchMap(params => {
      this.id = +params.get('id');
      return this.menuService.getMenuItem(this.id);
    })
    .subscribe(item => {
      this.item = item;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
