
import { Component, OnInit } from '@angular/core';
import { cities } from '../../data/cities';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {

  public price: number = 10;
  public minDate: Date = new Date();
  public cities = cities;
  constructor() {}


  ngOnInit() {
  }

}
