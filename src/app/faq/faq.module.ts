import { NgModule } from '@angular/core';
import { FaqService } from 'faq/services/faq.service';
import { SharedModule } from 'shared/shared.module';
import { FaqListComponent } from './components/faq-list/faq-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'faq',
        component: FaqListComponent
      }
    ])
  ],
  declarations: [FaqListComponent],
  providers: [
    FaqService
  ]
})
export class FaqModule { }
