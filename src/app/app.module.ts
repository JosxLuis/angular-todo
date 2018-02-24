import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './route/app-routing.module';

import { NewCategoryComponent } from './new-category/new-category.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CategoriesService } from './services/categories.service';


@NgModule({
  declarations: [
    AppComponent,
    NewCategoryComponent,
    CategoriesComponent,
    EditCategoryComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
