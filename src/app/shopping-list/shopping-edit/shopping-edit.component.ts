import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  name = new FormControl();
  amount = new FormControl();

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient(){
    const addedIngredient = new Ingredient(this.name.value,this.amount.value)
    this.shoppingListService.addIngredients(addedIngredient);
    console.log(addedIngredient);
    
    this.name.setValue('');
    this.amount.setValue('');
  }

}
