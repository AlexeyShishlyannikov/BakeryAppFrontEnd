import { NgModule } from '@angular/core';
import { HomeComponent } from 'app/core/components/home/home.component';
import { SharedModule } from 'shared/shared.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { InstagramService } from './services/instagram.service';
import { AppearDirective } from '../helpers/appeared-once';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    SharedModule,
    NgxCarouselModule,
    RouterModule.forChild([])
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    AppearDirective,
    FooterComponent
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
