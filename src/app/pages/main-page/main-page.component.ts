import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { professions } from '../../data/profession';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  searchField: string;
  professions: any[] = professions;

  constructor(private router: Router) {
    this.searchField = '';
  }

  ngOnInit() {
  }

  keyDownFunction(event) {
    if (event.keyCode === 13 && this.searchField) {
      const navigateUrl = '/search/' + this.searchField;
      this.router.navigate([navigateUrl]);
    }
  }

}
