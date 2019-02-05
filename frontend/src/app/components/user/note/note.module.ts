import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NoteModule {
  id: number;
  userId: number;
  text: string;
  image: string;
  imageUrl: string
}
