import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {

  @Input() name: string;
  @Input() image: string;
  @Input() location: string;
  @Input() speciallity: string;
  @Input() price: number;
  @Input() rate: number;
  @Input() tags: string[];

  constructor() {
  }

  ngOnInit() {
  }

  getImage(): string {
    if ( this.speciallity === 'Eletricista' ) {
      return '../../../assets/images/cables-close-up-computer-257736.jpg';
    } else if ( this.speciallity === 'Canalizador') {
      return '../../../assets/images/plumbing.jpg';
    } else {
      return '';
    }
  }
}
