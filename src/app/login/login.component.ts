import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../models/credentials';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;
  credentials: LoginCredentials = {
    email: '',
    password: ''
  };
  constructor(
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  login() {
    this.authService.login(this.credentials)
      .subscribe(result => {
        result ? this.dialog.closeAll() : this.invalidLogin = true;
      },
        err => {
          this.invalidLogin = true;
        });
  }
}
