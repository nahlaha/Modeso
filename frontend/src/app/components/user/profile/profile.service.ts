import { Injectable } from '@angular/core';
import { environment } from '.../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = environment.config;
  
  constructor(private http: HttpClient) {
  }

  delete(userId) {
    return this.http.delete(`${this.apiUrl}/deleteuser/${userId}`);
  }
}
