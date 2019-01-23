import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {

  name = 'Júlio Santos';
  location = 'Porto';
  speciallity = 'Eletricista';
  price = 20;
  rate = 4;

  constructor() { }

  ngOnInit() {
  }

}
