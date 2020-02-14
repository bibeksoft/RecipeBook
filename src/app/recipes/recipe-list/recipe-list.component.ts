import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import{Recipe} from './recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recpieSelected=new EventEmitter<Recipe>();
recipe:Recipe[]=[
  new Recipe('Ittalian Pasta','Pasta','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRePGJ88CtwfPsTOkPVavYCdLxW_bwGWsWp4eXOkk0g2a07Z4GH'),
  new Recipe('Authentic Mutton Recipe','Mutton Curry','https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Mutton-Curry-500x375.jpg')
];
  constructor() { }

  ngOnInit() {}
  OnSelected(rcpe:Recipe){
    this.recpieSelected.emit(rcpe);
  }

}
