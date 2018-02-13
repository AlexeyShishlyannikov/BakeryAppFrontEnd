import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeliveryService } from '../delivery.service';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-delivery-quote',
  templateUrl: './delivery-quote.component.html',
  styleUrls: ['./delivery-quote.component.css']
})
export class DeliveryQuoteComponent implements OnInit, OnDestroy {
  input: number;
  price: any = null;
  userZip: number;
  subscription: Subscription;
  constructor(
    public deliveryService: DeliveryService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.subscription = this.userService.getUserDetails()
      .subscribe(user => {
        this.userZip = user.zipCode;
        this.calcPrice();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  calcPrice() {
    this.price = this.deliveryService.calcPrice(this.userZip);
  }
}
