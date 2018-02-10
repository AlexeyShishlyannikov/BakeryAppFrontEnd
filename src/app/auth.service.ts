import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { Http, RequestOptions, Headers } from '@angular/http';
import { LoginCredentials, RegisterCredentials } from './models/credentials';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  private url: string = environment.API_URL;
  constructor(private http: Http) { }

  public login(credentials: LoginCredentials): Observable<boolean> {
    const options = this.setOptions();
    return this.http.post(`${this.url}/login`,
    JSON.stringify(credentials),
    options)
    .map(res => {
      return this.checkResultForToken(res);
    });
  }

  public register(credentials: RegisterCredentials): Observable<boolean> {
    const options = this.setOptions();
    return this.http.post(`${this.url}/register`,
    JSON.stringify(credentials),
    options)
    .map(res => {
      return this.checkResultForToken(res);
    });
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public isLoggedIn(): boolean {
    return tokenNotExpired('token');
  }

  public isAdmin(): boolean {
    const token = this.decodeToken();
    const role = token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    return role === 'Admin' ? true : false;
  }

  get currentUserEmail() {
    const token = this.decodeToken();
    return token.sub;
  }
  get currentUserId() {
    const token = this.decodeToken();
    return token['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  }

  private decodeToken() {
    const token = localStorage.getItem('token');
    if (!token) { return null; }
    return new JwtHelper().decodeToken(token);
  }

  private setOptions(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }

  private checkResultForToken(res): boolean {
    const result = res.json();
    if (result && result.token) {
      localStorage.setItem('token', result.token);
      return true;
    }
    return false;
  }
}
