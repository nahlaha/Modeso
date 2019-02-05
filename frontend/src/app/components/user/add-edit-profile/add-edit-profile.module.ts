import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AddEditProfileModule {
  id?: number;
  fullName: string;
  userName: string;
  password: string;
  email: string;
}
