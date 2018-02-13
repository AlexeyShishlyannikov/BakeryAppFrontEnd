import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../components/login/login.component';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  canActivate() {
    if (this.authService.isLoggedIn()) { return true; }

    this.dialog.open(LoginComponent);
    return false;
  }
}
