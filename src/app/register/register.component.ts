import { Component, OnInit } from '@angular/core';
import { RegisterCredentials } from '../models/credentials';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  register(credentials: RegisterCredentials) {
    this.authService.login(credentials)
      .subscribe(result => {
        if (result) {
          this.router.navigate(['/']);
        }
      });
  }
}
