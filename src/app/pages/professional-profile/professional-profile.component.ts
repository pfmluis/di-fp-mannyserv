import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professional } from 'src/app/classes/professional';

import { professionals } from './../../data/professionals';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.css']
})
export class ProfessionalProfileComponent implements OnInit {

  professional: Professional;

  constructor(private aRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    const id = this.aRoute.snapshot.params.id;
    this.professional = professionals.find((user) =>  user.id === +id );
    if (!this.professional) {
      this.route.navigate(['']);
    }
    console.log(this.professional);

  }

}
