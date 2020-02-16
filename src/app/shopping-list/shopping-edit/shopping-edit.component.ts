import { Component, OnInit ,Input,ViewChild,EventEmitter,ElementRef, Output} from '@angular/core';
import {Ingredients} from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('name',{static:false}) RecipeName:ElementRef;
@ViewChild('amount',{static:false}) RecipeCost:ElementRef;
@Output() ingredientDetails =new EventEmitter<Ingredients>()
  constructor() { }

  ngOnInit() {
  }
  OnAddRecipe(){
  this.ingredientDetails.emit( this.RecipeName.nativeElement.value,this.RecipeCost.nativeElement.value);
  }

}
