import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(): void {
    localStorage['username'] = '';
  }

  loggedIn(): boolean {
    if (localStorage.getItem('username')) {
      return true;
    } else {
      return false;
    }
  }

}
