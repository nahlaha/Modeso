import { Injectable } from '@angular/core';
import { environment } from '.../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AddEditProfileModule } from './add-edit-profile.module';

@Injectable({
  providedIn: 'root'
})
export class AddEditProfileService {

  private apiUrl = environment.config;

  constructor(private http: HttpClient) { }

  register(model: AddEditProfileModule) {
    let res = this.http.post(`${this.apiUrl}/register`, {
      userName: model.userName,
      password: model.password,
      fullName: model.fullName,
      email: model.email
    });
    return res;
  }

  getById(userId) {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }
  updateUser(model: AddEditProfileModule) {
    let res = this.http.put(`${this.apiUrl}/updateUser/${model.id}`, {
      userName: model.userName, password: model.password, fullName: model.fullName, email: model.email
    });
    return res;
  }
}
