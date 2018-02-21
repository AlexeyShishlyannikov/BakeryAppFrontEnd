import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { Ingredient } from '../../../shared/models/Ingredient';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { IngredientService } from 'shared/services/ingredient.service';

@Component({
  selector: 'app-admin-ingredient-list',
  templateUrl: './admin-ingredient-list.component.html',
  styleUrls: ['./admin-ingredient-list.component.css']
})
export class AdminIngredientListComponent implements OnDestroy, AfterViewInit {
  displayedColumns = ['id', 'name', 'description', 'edit', 'delete'];
  ingredients: Ingredient[];
  dataSource = new MatTableDataSource(this.ingredients);
  subscription: Subscription;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private ingService: IngredientService
  ) { }

  ngAfterViewInit() {
    this.subscription = this.ingService
      .getAllIngredients()
      .subscribe(ings => {
        this.ingredients = ings;
        this.setTable(ings);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private setTable(user) {
    this.dataSource = new MatTableDataSource(user);
    this.dataSource.sort = this.sort;
  }

  delete(ingredient: Ingredient) {
    this.ingService.deleteIngredient(ingredient.id).subscribe(res => {
      this.ingredients
        .splice(
          this.ingredients
            .findIndex(ing => ing.id === ingredient.id), 1);
      this.setTable(this.ingredients);
    });
  }
}
