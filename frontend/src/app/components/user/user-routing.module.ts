import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { AddEditProfileComponent } from './add-edit-profile/add-edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { NoteComponent } from './note/note.component';
import { AddEditNoteComponent } from './add-edit-note/add-edit-note.component';

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      { path: "", component: LoginComponent, data: { url: "/user/login" } },
      { path: "login", component: LoginComponent, data: { url: "/user/login" } },
      { path: "register", component: AddEditProfileComponent, data: { url: "/user/add-edit-profile" } },
      { path: "editaccout", component: AddEditProfileComponent, data: { url: "/user/add-edit-profile" } },
      { path: "profile", component: ProfileComponent, data: { url: "/user/profile" } },
      { path: "notes", component: NoteComponent, data: { url: "/user/note" } },
      { path: "createnote",component: AddEditNoteComponent, data: { url: "/user/add-edit-note"} },
      { path: "editnote/:id", component: AddEditNoteComponent, data: { url: "/user/add-edit-note" } },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
  routes = routes;
}
