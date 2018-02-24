import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Category {};

@Injectable()
export class CategoriesService {

  private api = 'http://localhost:4000/api/v1/';

  private categories: Category[];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.api}/categories`);
  }

  getById(){

  }

  create(){

  }

  update(){

  }

  delete(){
    
  }
}
