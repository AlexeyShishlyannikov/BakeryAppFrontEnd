import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule
} from './../../node_modules/@angular/material';
import { environment } from '../environments/environment.prod';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    NavbarComponent,
    UserDetailsComponent,
    UserPanelComponent,
    UserOrdersComponent,
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(<Routes>[
      {
        path: '',
        component: HomeComponent},
      {
        path: 'user/:id',
        component: UserPanelComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
