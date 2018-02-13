import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemDetailsComponent } from 'item/components/item-details/item-details.component';

import { MenuItemService } from './services/menu-item.service';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'menu/:id',
        component: ItemDetailsComponent
      },
    ])
  ],
  declarations: [
    ItemDetailsComponent
  ],
  providers: [
    MenuItemService,
  ]
})
export class ItemModule { }
