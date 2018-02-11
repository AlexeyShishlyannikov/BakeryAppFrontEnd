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
  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  private setOptions(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.authService.token);
    return new RequestOptions({ headers: headers });
  }

  public getUserDetails(id: string): Observable<User> {
    const options = this.setOptions();
    return this.http.get(`${this.url}/client/${id}`, options)
    .map(res => res.json());
  }

  public getUsers(): Observable<User[]> {
    const options = this.setOptions();
    if (!this.authService.isAdmin()) {
      return null;
    }
    return this.http.get(`${this.url}/client/`, options)
    .map(res => res.json());
  }

  public updateUserDetails(id: string, user: User): Observable<User> {
    const options = this.setOptions();
    return this.http.put(`${this.url}/client/${id}`, user, options)
    .map(res => res.json());
  }
}
