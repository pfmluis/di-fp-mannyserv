import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  constructor(private router: Router) {
    if (localStorage.getItem('username')) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

  onLoginClick(username: string, password: string) {
    if (username === 'user' && password === '123') {
      this.router.navigate(['/']);
      localStorage.setItem('username', username);
    }
  }

}
