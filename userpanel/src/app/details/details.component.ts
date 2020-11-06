import { Component, OnInit } from '@angular/core';
declare function loadPage() : any;


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    loadPage();
  }

}
