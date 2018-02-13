import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeliveryQuoteComponent } from 'shared/components/delivery-quote/delivery-quote.component';
import { MenuSwitchWeightComponent } from 'shared/components/menu-switch-weight/menu-switch-weight.component';
import { NotFoundComponent } from 'shared/components/not-found/not-found.component';
import { PhotoCarouselComponent } from 'shared/components/photo-carousel/photo-carousel.component';
import { DeliveryService } from 'shared/services/delivery.service';
import { IngredientService } from 'shared/services/ingredient.service';

import { ItemPriceCalcComponent } from './components/item-price-calc/item-price-calc.component';
import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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
    DeliveryQuoteComponent
  ],
  declarations: [
    MenuSwitchWeightComponent,
    PhotoCarouselComponent,
    ItemPriceCalcComponent,
    NotFoundComponent,
    DeliveryQuoteComponent
  ],
  entryComponents: [
    DeliveryQuoteComponent
  ],
  providers: [
    IngredientService,
    DeliveryService
  ]
})
export class SharedModule { }
