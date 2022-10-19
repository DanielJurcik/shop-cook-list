import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe : Recipe;

  constructor(private recipesService : RecipesService) { }

  ngOnInit(): void {
  }

  addToShoppingList(ingredients : Ingredient[]){
    this.recipesService.addIngredientsToShopList(ingredients)
  }

}
