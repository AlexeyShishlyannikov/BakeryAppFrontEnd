import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeliveryQuoteComponent } from 'shared/components/delivery-quote/delivery-quote.component';
import { MenuSwitchWeightComponent } from 'shared/components/menu-switch-weight/menu-switch-weight.component';
import { NotFoundComponent } from 'shared/components/not-found/not-found.component';
import { PhotoCarouselComponent } from 'shared/components/photo-carousel/photo-carousel.component';
import { DataService } from 'shared/services/data.service';
import { DeliveryService } from 'shared/services/delivery.service';
import { IngredientService } from 'shared/services/ingredient.service';

import { MaterialModule } from '../material.module';
import { ItemPriceCalcComponent } from './components/item-price-calc/item-price-calc.component';
import { PhonePipe } from '../helpers/phone.pipe';
import { OrderService } from 'shared/services/order.service';

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
    PhonePipe
  ],
  declarations: [
    MenuSwitchWeightComponent,
    PhotoCarouselComponent,
    ItemPriceCalcComponent,
    NotFoundComponent,
    DeliveryQuoteComponent,
    PhonePipe
  ],
  entryComponents: [
    DeliveryQuoteComponent
  ],
  providers: [
    IngredientService,
    DeliveryService,
    DataService,
    OrderService,
    PhonePipe
  ]
})
export class SharedModule { }
