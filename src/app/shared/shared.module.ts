import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserXhr, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeliveryQuoteComponent } from 'shared/components/delivery-quote/delivery-quote.component';
import { MenuSwitchWeightComponent } from 'shared/components/menu-switch-weight/menu-switch-weight.component';
import { NotFoundComponent } from 'shared/components/not-found/not-found.component';
import { PhotoCarouselComponent } from 'shared/components/photo-carousel/photo-carousel.component';
import { DeliveryService } from 'shared/services/delivery.service';
import { IngredientService } from 'shared/services/ingredient.service';
import { OrderService } from 'shared/services/order.service';

import { PhonePipe } from '../helpers/phone.pipe';
import { MaterialModule } from '../material.module';
import { ItemPriceCalcComponent } from './components/item-price-calc/item-price-calc.component';
import { BrowserXhrWithProgress, ProgressService } from './services/progress.service';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    MenuSwitchWeightComponent,
    PhotoCarouselComponent,
    ItemPriceCalcComponent,
    NotFoundComponent,
    DeliveryQuoteComponent,
    PhonePipe,
    ProgressBarComponent
  ],
  declarations: [
    MenuSwitchWeightComponent,
    PhotoCarouselComponent,
    ItemPriceCalcComponent,
    NotFoundComponent,
    DeliveryQuoteComponent,
    PhonePipe,
    ProgressBarComponent
  ],
  entryComponents: [
    DeliveryQuoteComponent
  ],
  providers: [
    IngredientService,
    DeliveryService,
    OrderService,
    PhonePipe,
    ProgressService,
  ]
})
export class SharedModule { }
