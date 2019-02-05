import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AddEditNoteService } from './add-edit-note.service';
import { NoteModule } from '../note/note.module';

@Component({
  selector: 'app-add-edit-note',
  templateUrl: './add-edit-note.component.html',
  styleUrls: ['./add-edit-note.component.css']
})
export class AddEditNoteComponent implements OnInit {
  loading: boolean = false;
  noteId: number;
  userId: number;
  model: NoteModule
  imageUrl: string;
  constructor(private service: AddEditNoteService, private router: Router, private route: ActivatedRoute) {
    this.userId = this.user ? this.user[0].Id : null;
    this.noteId = route.snapshot.params.id;
    this.model = new NoteModule;
  }

  get user(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    if (this.noteId) {//edit mode
      this.service.getById(this.noteId).subscribe(
        data => {
          this.model.id = data[0].Id;
          this.model.imageUrl = data[0].ImageUrl;
          this.model.text = data[0].Text;
        });
    }
  }


  submit() {
    this.loading = true;
    this.model.userId = this.userId
    if (this.noteId) {
      this.service.update(this.model).subscribe(
        success => {
          this.loading = false;
        },
        error => {
          this.loading = false;
        });
    } else {
      this.service.create(this.model).subscribe(
        success => {
          this.loading = false;
        },
        error => {
          this.loading = false;
        });
    }
    this.router.navigateByUrl(`notes`);
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var fileReader: FileReader = new FileReader();

    fileReader.onloadend = (e) => {
      var image = JSON.stringify(fileReader.result);
      this.model.image = image.replace(/^data:image\/png;base64,/, "");
    }
    fileReader.readAsDataURL(file);
  }
}
