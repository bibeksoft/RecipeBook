import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes/recipe-list/recipe.model'


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  RecipeDetails:Recipe;

  constructor() { }

  ngOnInit() {
  }

}
