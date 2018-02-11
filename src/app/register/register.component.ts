import { Component, OnInit } from '@angular/core';
import { RegisterCredentials } from '../models/credentials';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  invalidCredentials: boolean;
  currentRoute: UrlSegment[];
  credentials: RegisterCredentials = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    street: '',
    town: '',
    phone: '',
    zipCode: null
  };
  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentRoute = this.route.snapshot.url;
  }
  register() {
    this.authService.register(this.credentials)
      .subscribe(result => {
        console.log(result);
        result ? this.dialog.closeAll() : this.invalidCredentials = true;
      },
        err => {
          this.invalidCredentials = true;
        });
  }
}
