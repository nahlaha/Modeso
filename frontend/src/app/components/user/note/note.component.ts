import { Component, OnInit } from '@angular/core';
import { NoteModule } from '../note/note.module';
import { NoteService } from './note.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent implements OnInit {
  userId: number;
  dataSource: Observable<NoteModule[]>;
  constructor(private service: NoteService) {
    this.userId = this.user[0].Id;
  }

  get user(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.dataSource = this.service.getAllByUserId(this.userId)
  }

  delete(noteId) {
    this.service.delete(noteId).subscribe(
      data => location.reload()
    );
  }
}
