import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from './models/user';
@Injectable()
export class UserService {
  private url: string = environment.API_URL;
  private options: RequestOptions;
  constructor(
    private http: Http,
    private authService: AuthService
  ) {
    this.options = this.authService.setOptions();
   }

  public getUserDetails(id: string): Observable<User> {
    return this.http.get(`${this.url}/client/${id}`, this.options)
    .map(res => res.json());
  }

  public getUsers(): Observable<User[]> {
    if (!this.authService.isAdmin()) {
      return null;
    }
    return this.http.get(`${this.url}/client/`, this.options)
    .map(res => res.json());
  }

  public updateUserDetails(id: string, user: User): Observable<User> {
    return this.http.put(`${this.url}/client/${id}`, user, this.options)
    .map(res => res.json());
  }
}
