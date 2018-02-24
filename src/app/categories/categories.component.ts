import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 
  categories: any;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void{
    this.categoriesService.getAll().subscribe(result => {
      console.log(result);
      let categories = result.data;
      this.categories = categories;
    });
  }

}
