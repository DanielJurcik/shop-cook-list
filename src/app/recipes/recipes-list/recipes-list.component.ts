import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeFromListSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('Chicken salat', 'Chicken salat with fresh cucumber, tomato ... ','https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?resize=960,872?quality=90&webp=true&resize=960,872'),
    new Recipe('Kebab', 'Desc test','https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?resize=960,872?quality=90&webp=true&resize=960,872'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe : Recipe){
    this.recipeFromListSelected.emit(recipe);
  }

}
