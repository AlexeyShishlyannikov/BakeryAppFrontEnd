import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'shared/services/ingredient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from '../../../shared/models/Ingredient';

@Component({
  selector: 'app-admin-ingredient-form',
  templateUrl: './admin-ingredient-form.component.html',
  styleUrls: ['./admin-ingredient-form.component.css']
})
export class AdminIngredientFormComponent implements OnInit {
  ingredient: Ingredient = {
    id: null,
    name: '',
    description: ''
  };
  id: number;
  constructor(
    private ingredientService: IngredientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.initializeFields();
  }

  private initializeFields() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'add-item') {
      this.id = +id;
      this.ingredientService
        .getIngredient(this.id)
        .subscribe(ing => this.ingredient = ing);
    }
  }
  submit(): void {
    if (this.id > 0) {
      this.updateIngredient();
    } else {
      this.postIngrerdient();
    }
  }

  postIngrerdient() {
    this.ingredientService
      .postIngredient(this.ingredient)
      .subscribe(res => {
        this.router.navigate(['admin/ingredients/' + res.id]);
      });
  }
  updateIngredient() {
    this.ingredientService
      .updateIngredient(this.id, this.ingredient)
      .subscribe();
  }
  deleteItem() {
    this.ingredientService
      .deleteIngredient(this.id)
      .subscribe();
  }
}
