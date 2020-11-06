import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  public category = [];

  constructor(private categoryService:CategoryService) { }

  public getCategory() {
    this.categoryService.getCategoryList().subscribe(
      (response:any)=>{
        this.category = response;
      }
    );
  }
 
  ngOnInit(): void {
    this.getCategory();
  }

}
