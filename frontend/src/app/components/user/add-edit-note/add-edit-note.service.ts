import { Injectable } from '@angular/core';
import { environment } from '.../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NoteModule } from '../note/note.module';

@Injectable({
  providedIn: 'root'
})
export class AddEditNoteService {

  private apiUrl = environment.config;
  data: any;
  constructor(private http: HttpClient) { }

  create(model: NoteModule) {
    let res = this.http.post(`${this.apiUrl}/createnote`,
      { text: model.text, image: model.image, userId: model.userId });
    return res;
  }
  getById(noteId) {
    return this.http.get(`${this.apiUrl}/note/${noteId}`);
  }
  update(model: NoteModule) {
    let res = this.http.put(`${this.apiUrl}/updatenote/${model.id}`,
      { text: model.text, image: model.image, userId: model.userId });
    return res;
  }

}
