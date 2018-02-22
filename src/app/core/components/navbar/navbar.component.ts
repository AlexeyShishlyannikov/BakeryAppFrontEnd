import { Component, OnInit, OnDestroy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../../auth/components/login/login.component';
import { RegisterComponent } from '../../../auth/components/register/register.component';
import { AuthService } from '../../../auth/services/auth.service';
import { DeliveryQuoteComponent } from '../../../shared/components/delivery-quote/delivery-quote.component';
import { ContactsDialogComponent } from 'app/contacts/components/contacts-dialog/contacts-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output('toggleSidenav') toggleSidenav: EventEmitter<void> = new EventEmitter<void>();
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

  openContactsDialog() {
    this.dialog.open(ContactsDialogComponent);
  }

  openSidenav() {
    this.toggleSidenav.emit();
  }

  get matchMedia(): boolean {
    const mq = window.matchMedia('(max-width: 576px)');
    return mq.matches;
  }
}
