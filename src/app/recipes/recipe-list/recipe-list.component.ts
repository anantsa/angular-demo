import { Component, OnInit } from '@angular/core';
import { Recipe } from '../receipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Thai Curry', 'tasty dayummn', 'https://source.unsplash.com/random/80x80'),
    new Recipe('Bhuteko bhaat', 'tasty dayummn', 'https://picsum.photos/80/80')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
