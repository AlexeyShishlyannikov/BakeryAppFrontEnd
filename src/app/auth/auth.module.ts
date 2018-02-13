import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from 'auth/components/login/login.component';
import { RegisterComponent } from 'auth/components/register/register.component';
import { AuthGuard } from 'auth/services/auth.guard';
import { AuthService } from 'auth/services/auth.service';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }
