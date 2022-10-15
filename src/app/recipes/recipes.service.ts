import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipes.model";

export class RecipesService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe(
            'Chicken salat',
            'Chicken salat with fresh cucumber, tomato ... ',
            'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?resize=960,872?quality=90&webp=true&resize=960,872',
            [
                new Ingredient('Tomato',2),
                new Ingredient('Meat', 200)
            ]),
        new Recipe(
            'Kebab', 
            'Desc test',
            'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?resize=960,872?quality=90&webp=true&resize=960,872',
            [
                new Ingredient('Cucumber',2),
                new Ingredient('Meat', 200)
            ]),
      ];
    
    getRecipes(){
        return this.recipes.slice();
    }

    constructor() {}
}