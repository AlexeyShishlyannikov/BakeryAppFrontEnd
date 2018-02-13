import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'auth/services/auth.guard';

import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { UserService } from './services/user.service';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'user/:id',
        component: UserPanelComponent,
        canActivate: [AuthGuard]
      },
    ])
  ],
  declarations: [
    UserDetailsComponent,
    UserPanelComponent,
    UserOrdersComponent,
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
