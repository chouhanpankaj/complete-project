import { Component, EventEmitter , Output , OnInit } from '@angular/core';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit 
{
  @Output() logoutevent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public logout()
  {
    localStorage.removeItem('token');
    this.logoutevent.emit(false);
  }

}
