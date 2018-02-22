import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contacts } from '../../models/contacts.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-contacts-dialog',
  templateUrl: './contacts-dialog.component.html',
  styleUrls: ['./contacts-dialog.component.css']
})
export class ContactsDialogComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  contacts: Contacts = {
    id: 1,
    phone: '',
    address: '',
    instagram: '',
    facebook: '',
    email: ''
  };
  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.subscription = this.contactsService.getContacts()
      .subscribe(res => {
        this.contacts = res;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
