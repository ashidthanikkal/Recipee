import { Component, OnInit } from '@angular/core';
import { ApisService } from '../Services/apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  selectedCategory: string = 'Sort By Meal-Type';
  categories: string[] = [
    'Sort By Meal-Type',
    'Dinner',
    'Lunch',
    'Snack',
    'Dessert',
    'Side Dish',
    'Appetizer',
    'Beverage',
    'Breakfast',
  ];

  restList: any[] = [];
  searchData: string = "";

  constructor(private service: ApisService) {}

  ngOnInit(): void {
    this.service.getAllRecipes().subscribe((response: any) => {
      this.restList = response.recipes;
      console.log(this.restList);
    });
  }

  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
  }
}
