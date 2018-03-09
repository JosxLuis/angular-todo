import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CategoriesService } from '../services/categories.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  categories: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.categoriesService.getById(this.route.snapshot.paramMap.get('id')).subscribe(categories => {
      this.categories = categories['data'];
    },(error) =>{
      console.log(error);
    });
  }

  updated():void {
    this.categoriesService.update(this.categories).subscribe(categories => {
      if(categories['result']){
        this.toastr.success('Category edited!');
        this.router.navigate(['/']);
      }
    },(error) =>{
      console.log(error);
    });
  }

}
