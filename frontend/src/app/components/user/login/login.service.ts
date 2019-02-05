import { Injectable } from '@angular/core';
import { environment } from '.../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginModule } from './login.module';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private apiUrl = environment.config;

  constructor(private http: HttpClient) { }

  login(model: LoginModule) {
    let res = this.http.post(`${this.apiUrl}/login`, {
      userName: model.userName,
      password: model.password
    });
    res.subscribe(data => {
      localStorage.setItem('currentUser', JSON.stringify(data));
    });
    return res;
  }
}
