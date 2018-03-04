import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CategoriesService } from '../services/categories.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  categories: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getById(this.route.snapshot.paramMap.get('id')).subscribe(categories => {
      this.categories = categories['data'];
    },(error) =>{
      console.log(error);
    });
  }

  updated():void {
    this.categoriesService.update(this.categories).subscribe(categories => {
      console.log(categories);
    },(error) =>{
      console.log(error);
    });
  }

}
