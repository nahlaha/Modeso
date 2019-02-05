import { Injectable } from '@angular/core';
import { environment } from '.../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NoteModule } from '../note/note.module';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl = environment.config;

  constructor(private http: HttpClient) { }

  getAllByUserId(userId): Observable<NoteModule[]> {
    return this.http.get<NoteModule[]>(`${this.apiUrl}/notes/${userId}`);
  }

  delete(noteId) {
    return this.http.delete(`${this.apiUrl}/deletenote/${noteId}`);
  }
}
