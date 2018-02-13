import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth/services/auth.service';
import { DataService } from '../../shared/services/data.service';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../../shared/models/menuItem';
import { MenuItemSave } from '../../admin/models/MenuItemSave';

@Injectable()
export class MenuService extends DataService {
  constructor(
    http: Http,
    authService: AuthService
  ) {
    const menuServiceUrl = `${environment.API_URL}/menu`;
    super(http, authService, menuServiceUrl);
  }

  public getMenuItem(id: number): Observable<MenuItem> {
    return this.get(id) as Observable<MenuItem>;
  }

  public getMenu(): Observable<MenuItem[]> {
    return this.getAll() as Observable<MenuItem[]>;
  }

  public postMenuItem(menuItem: MenuItemSave): Observable<MenuItem> {
    return this.post(menuItem) as Observable<MenuItem>;
  }

  public updateMenuItem(id: number, menuItem: MenuItemSave): Observable<MenuItem> {
    return this.update(id, menuItem) as Observable<MenuItem>;
  }

  public deleteMenuItem(id: number): Observable<string> {
    return this.delete(id) as Observable<string>;
  }
}
