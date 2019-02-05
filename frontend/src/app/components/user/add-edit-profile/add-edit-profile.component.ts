import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEditProfileService } from './add-edit-profile.service';
import { AddEditProfileModule } from './add-edit-profile.module';

@Component({
  selector: 'app-add-edit-profile',
  templateUrl: './add-edit-profile.component.html',
  styleUrls: ['./add-edit-profile.component.css']
})
export class AddEditProfileComponent implements OnInit {
  model: AddEditProfileModule;
  loading: boolean = false;
  userId: number;
  constructor(private service: AddEditProfileService, private router: Router) {
    this.userId = this.user ? this.user[0].Id : null;
    this.model = new AddEditProfileModule;
  }
  get user(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {
    if (this.userId) {
      this.service.getById(this.userId).subscribe(
        data => {
          this.model.id = data[0].Id;
          this.model.userName = data[0].UserName;
          this.model.password = data[0].Password;
          this.model.fullName = data[0].FullName;
          this.model.email = data[0].Email;
        });
    }
  }
  register() {
    this.loading = true;
    if (this.userId) {
      this.service.updateUser(this.model).subscribe(
        success => {
          this.loading = false;
          this.router.navigateByUrl('login');
        },
        error => {
          this.loading = false;
        });
    }
    this.service.register(this.model).subscribe(
      success => {
        this.loading = false;
        this.router.navigateByUrl('login');
      },
      error => {
        this.loading = false;
      });
  }

  login() {
    this.router.navigateByUrl('login');
  }
}
