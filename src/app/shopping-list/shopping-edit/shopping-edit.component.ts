import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  name = new FormControl();
  amount = new FormControl();
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredients(){
    console.log(this.name.value,this.amount.value);
    const addedIngredient = new Ingredient(this.name.value,this.amount.value)
    this.ingredientAdded.emit(addedIngredient);
    this.name.setValue('');
    this.amount.setValue('');
  }

}
