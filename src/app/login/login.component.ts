import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../models/credentials';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  invalidLogin: boolean;
  credentials: LoginCredentials = {
    email: '',
    password: ''
  };
  currentRoute: UrlSegment[];
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentRoute = this.route.snapshot.url;
  }

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
