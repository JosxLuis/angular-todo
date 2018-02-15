import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [
    {
      id: 1,
      title : 'Progressive Web Apps'
    },
    {
      id: 2,
      title : 'Progressive Web Apps'
    },
    {
      id: 3,
      title : 'Progressive Web Apps'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
