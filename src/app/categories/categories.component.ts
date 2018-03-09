import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 
  categories: any;

  constructor(
    private categoriesService: CategoriesService,
    private toastr: ToastrService) { }

  /** 
   * 
   * 
  */
  ngOnInit() {
    this.getCategories();
  }

  /** 
   * 
   * 
  */
  getCategories() : void {
    this.categoriesService.getAll().subscribe(categories => {
      this.categories = categories['data'];
    },(error) =>{
      console.log(error);
    });
  }

  delete(category, index) : void {
    console.log('delete', category);
    this.categoriesService.delete(category).subscribe(result => {
      this.categories.splice(index, 1);
      this.toastr.success(category.name,'Category deleted!');
    },(error) =>{
      console.log(error);
    });
  }

}
