import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatDialog } from '@angular/material';
import { ContactsDialogComponent } from './contacts/components/contacts-dialog/contacts-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private dialog: MatDialog
  ) {}
  title = 'app';
  @ViewChild('sidenav') sidenav: MatSidenav;

  close() {
    this.sidenav.close();
  }
  open(): void {
    this.sidenav.open();
  }
  openContactsDialog() {
    this.sidenav.close();
    this.dialog.open(ContactsDialogComponent);
  }
}
