import { ChangeDetectorRef, EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients : Ingredient[] = [
        new Ingredient('Orange', 4),
        new Ingredient('Tomato', 3)
    ];

    constructor(){

    }

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}