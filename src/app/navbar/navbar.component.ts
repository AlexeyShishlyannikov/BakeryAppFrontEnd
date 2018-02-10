import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../auth.service';

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
}
