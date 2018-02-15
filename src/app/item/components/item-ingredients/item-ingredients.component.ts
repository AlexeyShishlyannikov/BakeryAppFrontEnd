import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'shared/models/Ingredient';

@Component({
  selector: 'app-item-ingredients',
  templateUrl: './item-ingredients.component.html',
  styleUrls: ['./item-ingredients.component.css']
})
export class ItemIngredientsComponent{
  @Input('ingredients') ingredients: Ingredient;
}
