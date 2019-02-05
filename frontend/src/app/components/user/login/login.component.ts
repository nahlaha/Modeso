import { Component, OnInit } from '@angular/core';
import { LoginModule } from './login.module';
import { LoginService } from './login.service';
import { UserRoutingModule } from '../user-routing.module';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModule;
  loading: boolean = false;
  errorMessage: string;
  
  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) {
    this.model = new LoginModule;
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.loginService.login(this.model)
      .subscribe(
        success => {
          this.loading = false;
          this.router.navigateByUrl('profile');
        },
        error => {
          this.loading = false;
          this.errorMessage = error.message;
        });
  }

  register() {
    this.router.navigateByUrl('register');
  }
}
