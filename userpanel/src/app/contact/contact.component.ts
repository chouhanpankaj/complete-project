import { Component, OnInit } from '@angular/core';
import { logWarnings } from 'protractor/built/driverProviders';

declare function loadPage() : any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    loadPage();
  }

}
