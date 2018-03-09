import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  categories: any = {};

  constructor( private router: Router,
    private categoriesService: CategoriesService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  created(): void{
    this.categoriesService.create(this.categories).subscribe(categories => {
      if(categories['result']){
        this.toastr.success('Category created!');
        this.router.navigate(['/']);
      }
    },(error) =>{
      console.log(error);
    });
  }
}
