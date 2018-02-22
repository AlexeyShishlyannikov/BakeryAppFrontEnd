import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';
import { AuthService } from 'auth/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Contacts } from '../models/contacts.model';

@Injectable()
export class ContactsService {
  url: string = environment.API_URL;
  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  getContacts(): Observable<Contacts> {
    return this.http.get(`${this.url}/contacts`).map(res => res.json());
  }

  updateContacts(contacts: Contacts): Observable<Contacts> {
    return this.http
      .put(
        `${this.url}/contacts`,
        contacts,
        this.authService.setOptions())
      .map(res => res.json());
  }
}
