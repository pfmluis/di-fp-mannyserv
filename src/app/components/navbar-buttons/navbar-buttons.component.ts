import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-buttons',
  templateUrl: './navbar-buttons.component.html',
  styleUrls: ['./navbar-buttons.component.css']
})
export class NavbarButtonsComponent implements OnInit {

  name: string;

  constructor() {
    this.name = localStorage.getItem('username');
  }

  ngOnInit() {
  }

  logout(): void {
    localStorage.username = '';
  }

  loggedIn(): boolean {
    if (localStorage.username) {
      return true;
    } else {
      return false;
    }
  }
}
