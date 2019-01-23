import { ActivatedRoute  } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SearchFilter } from './../../classes/search-filter';

import { cities } from '../../data/cities';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {

  @Output() submitted = new EventEmitter<SearchFilter>();

  searchField: string;
  price: number;
  date: Date;
  minDate: Date;
  city: string;
  cities: any;

  constructor(private aRouter: ActivatedRoute ) {
    this.price = 10;
    this.minDate = new Date();
    this.cities = cities;
    if (this.aRouter.snapshot.params.content) {
      this.searchField = this.aRouter.snapshot.params.content;
    }
  }

  ngOnInit() {
  }

  onSubmit(): void {
    const filter = new SearchFilter(this.searchField, this.city, this.date, this.price);
    this.submitted.emit(filter);
  }

}
