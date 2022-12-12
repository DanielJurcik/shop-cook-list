import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipes.model";
@Injectable()
export class RecipesService{
    private recipes : Recipe[] = [
        new Recipe(
            1,
            'Chicken salat',
            'Chicken salat with fresh cucumber, tomato ... ',
            'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?resize=960,872?quality=90&webp=true&resize=960,872',
            [
                new Ingredient('Tomato',2),
                new Ingredient('Meat', 200)
            ]),
        new Recipe(
            2,
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

    getRecipe(id : number){
        return this.recipes.find(
            (s) => {
              return +s.id === +id;
            }
        );
    }

    addIngredientsToShopList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    constructor(private slService : ShoppingListService) {}
}