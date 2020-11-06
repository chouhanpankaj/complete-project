import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

import { Router} from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService, private router:Router) { }

  ngOnInit(): void {
  }

  public save(frm) {
    this.categoryService.addCategory(frm.value).subscribe((response:any)=> {
      if(response.status) {
        this.router.navigateByUrl('/category');
      }
    })
  }

}
