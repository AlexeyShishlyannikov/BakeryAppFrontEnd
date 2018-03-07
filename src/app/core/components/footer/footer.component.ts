import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../../contacts/services/contacts.service';
import { Contacts } from '../../../contacts/models/contacts.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public phoneNumber = null;
  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.contactsService.getContacts().subscribe(res => {
      this.phoneNumber = res.phone;
    });
  }

}
