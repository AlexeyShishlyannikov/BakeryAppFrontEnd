import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';
import { AuthService } from '../../auth/services/auth.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Ingredient } from '../models/Ingredient';

@Injectable()
export class IngredientService extends DataService {
  constructor(
    http: Http,
    authService: AuthService
  ) {
    const ingredientServiceUrl = `${environment.API_URL}/ingredients`;
    super(http, authService, ingredientServiceUrl);
  }

  public getIngredient(id: number): Observable<Ingredient> {
    return this.get(id) as Observable<Ingredient>;
  }

  public getAllIngredients(): Observable<Ingredient[]> {
    return this.getAll() as Observable<Ingredient[]>;
  }

  public postIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.post(ingredient) as Observable<Ingredient>;
  }

  public updateIngredient(id: number, ingredient: Ingredient): Observable<Ingredient> {
    return this.update(id, ingredient) as Observable<Ingredient>;
  }

  public deleteIngredient(id: number): Observable<string> {
    return this.delete(id) as Observable<string>;
  }
}
