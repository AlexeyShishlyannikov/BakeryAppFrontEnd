import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { Http } from '@angular/http';
import { LoginCredentials, RegisterCredentials } from './models/credentials';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  private url: string = environment.API_URL;
  constructor(private http: Http) { }

  public login(credentials: LoginCredentials): Observable<boolean> {
    return this.http.post(`${this.url}/login`, credentials)
    .map(res => {
      const result = res.json();
      if ( result && result.token) {
        localStorage.setItem('token', result.token);
        return true;
      }
      return false;
    });
  }

  public register(credentials: RegisterCredentials): Observable<string> {
    return this.http.post(`${this.url}/register`, credentials).map(res => res.json());
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public isLoggedIn(): boolean {
    return tokenNotExpired();
  }

  public isAdmin(): boolean {
    const token = localStorage.getItem('token');
    if (!token) { return false; }
    const role = new JwtHelper().decodeToken(token)['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    return role === 'Admin' ? true : false;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) { return null; }
    return new JwtHelper().decodeToken(token);
  }
}
