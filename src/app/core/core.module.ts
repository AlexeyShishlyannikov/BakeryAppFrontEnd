import { NgModule } from '@angular/core';
import { HomeComponent } from 'app/core/components/home/home.component';
import { SharedModule } from 'shared/shared.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { InstagramService } from './services/instagram.service';
import { AppearDirective } from '../helpers/appeared-once';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    AppearDirective
  ],
  exports: [
    HomeComponent,
    NavbarComponent
  ],
  providers: [
    InstagramService
  ]
})
export class CoreModule { }
