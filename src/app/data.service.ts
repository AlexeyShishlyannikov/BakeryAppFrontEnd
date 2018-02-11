import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private options: RequestOptions;
  constructor(
    private http: Http,
    private authService: AuthService,
    private url: string
  ) {
    this.options = this.authService.setOptions();
  }

  protected getAll(): Observable<any[]> {
    return this.http
      .get(this.url, this.options)
      .map(res => res.json());
  }

  protected get(id: number): Observable<any> {
    return this.http
      .get(`${this.url}/${id}`, this.options)
      .map(res => res.json());
  }

  protected post(item: any): Observable<any> {
    return this.http
      .post(this.url, item, this.options)
      .map(res => res.json());
  }

  protected update(id: number, item: any): Observable<any> {
    return this.http
      .put(`${this.url}/${id}`, item, this.options)
      .map(res => res.json());
  }

  protected delete(id: number): Observable<any> {
    return this.http
      .delete(`${this.url}/${id}`, this.options)
      .map(res => res.json());
  }
}
