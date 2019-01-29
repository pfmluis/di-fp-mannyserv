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
    if (profession) {
      this.filterResults(new SearchFilter(profession, null, null, Number.MAX_SAFE_INTEGER));
    }
  }

  onSubmit(result: SearchFilter): void {
    this.filterResults(result);
  }

  filterResults(result: SearchFilter) {
    this.collection = [];
    if (result.profession) {
      const results: string[] = result.profession.toLowerCase().split(' ');
      results.forEach((res) => {
        if ( result.location ) {
          professionals.forEach((professional) => {
            if (professional.speciallity.toLowerCase().includes(res) &&
                professional.location === result.location &&
                professional.price <= result.price ||
                professional.tags.toLocaleString().toLocaleLowerCase().includes(res) &&
                professional.location === result.location &&
                professional.price <= result.price) {
                  if (!this.collection.includes(professional)) {
                    this.collection.push(professional);
                  }
               }
          });
        } else  {
          professionals.forEach((professional) => {
            if (professional.speciallity.toLowerCase().includes(res) &&
                professional.price <= result.price ||
                professional.tags.toLocaleString().toLowerCase().includes(res) &&
                professional.price <= result.price) {
                if (!this.collection.includes(professional)) {
                  this.collection.push(professional);
                }
               }
          });
        }
      });
    } else {
      if (result.location) {
        professionals.forEach((professional) => {
          if (professional.location === result.location &&
              professional.price <= result.price) {
                if (!this.collection.includes(professional)) {
                  this.collection.push(professional);
                }
          }
        });
      } else {
        this.collection = professionals;
      }
    }

  }


}
