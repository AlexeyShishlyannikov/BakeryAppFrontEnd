import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from './services/contacts.service';
import { SharedModule } from 'shared/shared.module';
import { ContactsDialogComponent } from './components/contacts-dialog/contacts-dialog.component';

@NgModule({
  imports: [
    SharedModule
  ],
  entryComponents: [
    ContactsDialogComponent
  ],
  declarations: [ContactsDialogComponent],
  providers: [
    ContactsService
  ]
})
export class ContactsModule { }
