import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { Order } from 'shared/models/Order';

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrls: ['./admin-order-list.component.css']
})
export class AdminOrderListComponent implements AfterViewInit, OnDestroy {
  displayedColumns = ['id', 'name', 'phone', 'delivered'];
  users: Order[];
  dataSource = new MatTableDataSource(this.users);
  subscription: Subscription;
  numberOfOpenOrders: number;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private orderService: OrderService
  ) { }


  ngAfterViewInit() {
    this.subscription = this.orderService
      .getAllOrders()
      .subscribe(users => {
        this.users = users;
        this.setTable(users);
        this.numberOfOpenOrders = this.users.length;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private setTable(user) {
    this.dataSource = new MatTableDataSource(user);
    this.dataSource.sort = this.sort;
  }
}
