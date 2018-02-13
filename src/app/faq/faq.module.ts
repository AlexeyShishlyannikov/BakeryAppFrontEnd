import { NgModule } from '@angular/core';
import { FaqService } from 'faq/services/faq.service';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [
    FaqService
  ]
})
export class FaqModule { }
