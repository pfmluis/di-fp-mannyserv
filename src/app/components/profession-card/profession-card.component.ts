import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profession-card',
  templateUrl: './profession-card.component.html',
  styleUrls: ['./profession-card.component.css']
})
export class ProfessionCardComponent implements OnInit {

  @Input() professionName;
  @Input() professionImage;

  constructor() { }

  ngOnInit() {
  }

}
