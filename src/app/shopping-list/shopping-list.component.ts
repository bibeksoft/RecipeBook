import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[]=[
    new Ingredients("Milk ",10),
    new Ingredients("Chicken",100),
    new Ingredients("Masala",20)
  ];
  constructor() { }

  ngOnInit() {
  }
  addedlist(newItemAdded:Ingredients){
    this.ingredients.push(newItemAdded);

  }

}
