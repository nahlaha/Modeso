import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { AddEditProfileComponent } from './add-edit-profile/add-edit-profile.component';
import { LoginService } from './login/login.service'
import { AddEditProfileService } from './add-edit-profile/add-edit-profile.service';
import { ProfileComponent } from './profile/profile.component';
import { NoteComponent } from './note/note.component';
import { AddEditNoteComponent } from './add-edit-note/add-edit-note.component';
import { ProfileService } from './profile/profile.service';
import { NoteService } from './note/note.service';
import { AddEditNoteService } from './add-edit-note/add-edit-note.service';


@NgModule({
  declarations: [UserComponent, LoginComponent, AddEditProfileComponent, ProfileComponent, NoteComponent, AddEditNoteComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  providers: [
    LoginService,
    AddEditProfileService,
    ProfileService,
    AddEditNoteService,
    NoteService

  ]
})
export class UserModule {
  id?: number;
  fullName: string;
  email: string;
  userName: string;
  password: string;
}
export class ApiResponse {
  Code: number;
  Message: string;
  Data: {};
}
