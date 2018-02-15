import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { User } from 'user/models/user';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from 'user/services/user.service';

@Component({
  selector: 'app-admin-client-list',
  templateUrl: './admin-client-list.component.html',
  styleUrls: ['./admin-client-list.component.css']
})
export class AdminClientListComponent implements OnDestroy, AfterViewInit {
  displayedColumns = ['id', 'name', 'phone', 'address'];
  users: User[];
  dataSource = new MatTableDataSource(this.users);
  subscription: Subscription;
  numberOfUsers: number;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService
  ) { }

  ngAfterViewInit() {
    this.subscription = this.userService
      .getUsers()
      .subscribe(users => {
        this.users = users;
        this.setTable(users);
        this.numberOfUsers = this.users.length;
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
