import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { professionals } from './../../data/professionals';

import { SearchFilter } from './../../classes/search-filter';
import { Professional } from 'src/app/classes/professional';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  p = 1;
  filtred = false;
  collection: Professional[] = professionals;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const profession = this.route.snapshot.params.content;
    this.filterResults(new SearchFilter(profession, null, null, Number.MAX_SAFE_INTEGER));
  }

  onSubmit(result: SearchFilter): void {
    this.filterResults(result);
  }

  filterResults(result: SearchFilter): void {
    this.collection = [];
    if (result) {
      professionals.forEach(professional => {
        if (result.profession && result.location) {
          if (
              professional.speciallity.includes(result.profession) &&
              professional.price <= result.price &&
              professional.location === result.location ||
              professional.tags.includes(result.profession)  &&
              professional.price <= result.price &&
              professional.location === result.location
              ) {
              this.collection.push(professional);
            }
        } else if (result.profession && !result.location) {
          if (
            professional.speciallity.includes(result.profession) &&
            professional.price <= result.price ||
            professional.tags.includes(result.profession)  &&
            professional.price <= result.price
            ) {
            this.collection.push(professional);
          }
        } else if (!result.profession && result.location) {
          if (
            professional.price <= result.price &&
            professional.location === result.location ||
            professional.price <= result.price &&
            professional.location === result.location
            ) {
            this.collection.push(professional);
        } else {
          if (professional.price <= result.price) {
              this.collection.push(professional);
          }
        }
      }
    });
    } else {
      this.collection = professionals;
    }
  }
}
