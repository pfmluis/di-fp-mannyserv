import { Component, OnInit } from '@angular/core';

import { cities } from './../../data/cities';

import { SearchFilter } from './../../classes/search-filter';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  p = 1;
  collection: any[] = cities;
  result: SearchFilter;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(result: SearchFilter): void {
    console.log(result);
    this.result = result;
  }

}
