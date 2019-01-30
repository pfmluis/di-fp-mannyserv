import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professional } from 'src/app/classes/professional';

import { professionals } from './../../data/professionals';
import { cities } from '../../data/cities';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.css']
})
export class ProfessionalProfileComponent implements OnInit {

  date: Date;
  hour: Date;
  address: string;
  city: string;
  zipcode: string;

  dialogOpened = false;
  step: number;
  professional: Professional;
  minDate: Date;
  minHour: Date;
  maxHour: Date;
  steps: any = { hour: 1, minute: 15 };
  mask: string;
  cityList: string[];
  invalidForm: boolean;

  constructor(private aRoute: ActivatedRoute, private route: Router) {
    this.invalidForm = false;
    this.step = 1;
    this.minDate = new Date();
    this.minHour = new Date(1, 1, 1, 9, 0);
    this.maxHour = new Date(1, 1, 1, 17, 0);
    this.mask = '0000-000';
    this.zipcode = '0000000';
    this.cityList = cities;
  }

  ngOnInit() {
    const id = this.aRoute.snapshot.params.id;
    this.professional = professionals.find((user) =>  user.id === +id );
    if (!this.professional) {
      this.route.navigate(['']);
    }
    console.log(this.professional);
  }

  public close() {
    this.dialogOpened = false;
    this.step = 1;
  }

  public open() {
    this.dialogOpened = true;
    this.step = 1;
  }

  public action(action: string) {
    if (action === 'continue') {
      if (this.date && this.hour && this.address && this.city && this.zipcode) {
        this.step = 2;
      } else {
        this.invalidForm = true;
      }
    } else {
      this.step = 1;
      this.dialogOpened = false;
    }
  }

}
