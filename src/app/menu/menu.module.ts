import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuFilterComponent } from 'menu/components/menu-filter/menu-filter.component';
import { MenuListItemComponent } from 'menu/components/menu-list-item/menu-list-item.component';
import { MenuListComponent } from 'menu/components/menu-list/menu-list.component';
import { MenuService } from 'menu/services/menu.service';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'menu',
        component: MenuListComponent
      },
    ])
  ],
  declarations: [
    MenuListComponent,
    MenuListItemComponent,
    MenuFilterComponent,
  ],
  providers: [
    MenuService
  ]
})
export class MenuModule { }
