import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';
import { AuthService } from 'auth/services/auth.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';
import { Order } from 'shared/models/Order';

@Injectable()
export class OrderService extends DataService {

  constructor(
    http: Http,
    authService: AuthService
  ) {
    const orderServiceUrl = `${environment.API_URL}/orders`;
    super(http, authService, orderServiceUrl);
  }

  public getAllOrders(): Observable<Order[]> {
    return this.getAll() as Observable<Order[]>;
  }

  public getOrder(id: number): Observable<Order> {
    return this.get(id) as Observable<Order>;
  }

  public getUserOrders(): Observable<Order[]> {
    return this.http
      .get(this.url + '/' + this.authService.currentUserId, this.options)
      .map(res => res.json());
  }

  public postOrder(order: Order): Observable<Order> {
    return this.post(order) as Observable<Order>;
  }

  public deleteOrder(id: number): Observable<string> {
    return this.delete(id) as Observable<string>;
  }

  public changeStatus(id: number, status: boolean): Observable<string> {
    return this.http
      .patch(`${this.url}/${id}`, status, this.options)
      .map(res => res.toString());
  }
}
