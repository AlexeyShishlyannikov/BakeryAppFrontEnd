import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminMenuListComponent } from './components/admin-menu-list/admin-menu-list.component';
import { RouterModule } from '@angular/router';
import { AdminGuard } from './services/admin.guard';
import { AuthGuard } from 'auth/services/auth.guard';
import { AdminConfirmPopupComponent } from './components/admin-confirm-popup/admin-confirm-popup.component';
import { AdminItemFormComponent } from './components/admin-item-form/admin-item-form.component';
import { PhotoService } from './services/photo.service';
import { AdminClientListComponent } from './components/admin-client-list/admin-client-list.component';
import { AdminOrderListComponent } from './components/admin-order-list/admin-order-list.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'admin/menu/:id',
        component: AdminItemFormComponent,
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: 'admin/menu',
        component: AdminMenuListComponent,
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: 'admin/clients',
        component: AdminClientListComponent,
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: 'admin/orders',
        component: AdminOrderListComponent,
        canActivate: [AuthGuard, AdminGuard]
      },
    ])
  ],
  declarations: [
    AdminMenuListComponent,
    AdminConfirmPopupComponent,
    AdminItemFormComponent,
    AdminClientListComponent,
    AdminOrderListComponent
  ],
  providers: [
    AdminGuard,
    PhotoService
  ],
  entryComponents: [
    AdminConfirmPopupComponent
  ]
})
export class AdminModule { }
