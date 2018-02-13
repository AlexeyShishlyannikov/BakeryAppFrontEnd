import { NgModule } from '@angular/core';
import { HomeComponent } from 'app/core/components/home/home.component';
import { SharedModule } from 'shared/shared.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  exports: [
    HomeComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
