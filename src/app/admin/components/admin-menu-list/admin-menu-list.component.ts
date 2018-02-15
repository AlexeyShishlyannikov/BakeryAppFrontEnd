import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { MenuItem } from '../../../shared/models/menuItem';
import { MenuService } from '../../../menu/services/menu.service';
import { Subscription } from 'rxjs/Subscription';
import { AdminConfirmPopupComponent } from '../admin-confirm-popup/admin-confirm-popup.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-menu-list',
  templateUrl: './admin-menu-list.component.html',
  styleUrls: ['./admin-menu-list.component.css']
})
export class AdminMenuListComponent implements OnDestroy, AfterViewInit {
  displayedColumns = ['id', 'name', 'type', 'description', 'price', 'edit', 'delete'];
  menu: MenuItem[];
  dataSource = new MatTableDataSource(this.menu);
  subscription: Subscription;
  displayColumnsMedia = ['name', 'type', 'edit', 'delete'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private menuService: MenuService,
    private matDialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit() {
    this.subscription = this.menuService
      .getMenu()
      .switchMap(menu => {
        menu.forEach(item => {
          item.description = item.description.substring(0, 15) + '..';
          item.name = item.name.substring(0, 9) + '..';
        });
        this.menu = menu;
        this.setTable(menu);
        return this.route.queryParamMap;
      })
      .subscribe(queryObj => {
        const deleteIndex = this.menu.findIndex(item => item.id === +queryObj.get('deletedId'));
        if (deleteIndex >= 0) {
          this.menu.splice(deleteIndex, 1);
        }
        this.setTable(this.menu);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteItem(item: MenuItem) {
    this.matDialog.open(AdminConfirmPopupComponent);
  }
  private setTable(menu) {
    this.dataSource = new MatTableDataSource(menu);
    this.dataSource.sort = this.sort;
  }
  get matchMedia(): boolean {
    const mq = window.matchMedia('(max-width: 576px)');
    return mq.matches;
  }
}
