import { Component, OnInit } from '@angular/core';
declare function loadPage() : any;


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    loadPage();
  }

}
