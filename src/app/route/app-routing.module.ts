import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from '../categories/categories.component';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'new', component: NewCategoryComponent },
  { path: 'edit/:id', component: EditCategoryComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}