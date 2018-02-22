import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../../contacts/models/contacts.model';
import { ContactsService } from '../../../contacts/services/contacts.service';

@Component({
  selector: 'app-admin-contacts',
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.css']
})
export class AdminContactsComponent implements OnInit {
  contacts: Contacts = {
    id: 1,
    phone: '',
    address: '',
    email: '',
    instagram: '',
    facebook: ''
  };
  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.contactsService.getContacts()
      .subscribe(res => {
        this.contacts = res;
      });
  }

  submit() {
    this.contactsService.updateContacts(this.contacts)
      .subscribe();
  }

}
