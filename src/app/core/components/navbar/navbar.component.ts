import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../../auth/components/login/login.component';
import { RegisterComponent } from '../../../auth/components/register/register.component';
import { AuthService } from '../../../auth/services/auth.service';
import { DeliveryQuoteComponent } from '../../../shared/components/delivery-quote/delivery-quote.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private dialog: MatDialog,
    public authService: AuthService
  ) {}

  openLoginDialog() {
    this.dialog.open(LoginComponent);
  }

  openRegisterDialog() {
    this.dialog.open(RegisterComponent);
  }

  openDeliveryDialog() {
    this.dialog.open(DeliveryQuoteComponent);
  }

  get matchMedia(): boolean {
    const mq = window.matchMedia('(max-width: 576px)');
    return mq.matches;
  }
}
