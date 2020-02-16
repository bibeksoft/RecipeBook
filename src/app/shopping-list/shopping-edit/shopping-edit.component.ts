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
    const RecipeName=this.RecipeName.nativeElement.value;
    const RecipeCost=this.RecipeCost.nativeElement.value
    
     this.ingredientDetails.emit(new Ingredients(RecipeName,RecipeCost));
  }

}
