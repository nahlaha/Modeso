import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  email: string;
  constructor() {
    this.email = this.user ? this.user[0].Email : null;
  }

  get user(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  signOut() {
    localStorage.clear();
  }
}
