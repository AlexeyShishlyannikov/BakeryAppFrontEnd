import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'user/models/user';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  @Input('userId') userId: string;
  user: User = {
    id: null,
    name: '',
    address: '',
    zipCode: null,
    phone: '',
    email: ''
  };
  userSubscription: Subscription;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userSubscription = this.userService
      .getUserDetails()
      .subscribe(user => {
        this.user = user;
      });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  updateUser() {
    this.userService.updateUserDetails(this.userId, this.user)
      .subscribe(user => {
        this.user = user;
      });
  }
}
