import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: number;
  fullName: string;
  constructor(private profileService: ProfileService, private router: Router) {
    this.userId = this.user ? this.user[0].Id : null;
    this.fullName = this.user ? this.user[0].FullName : null;
  }
  get user(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {
  }
  delete() {
    this.profileService.delete(this.userId).subscribe(
      data => {
        localStorage.clear();
        this.router.navigateByUrl('register');
      }
    )
  }
}
