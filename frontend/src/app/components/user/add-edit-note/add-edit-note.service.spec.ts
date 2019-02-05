import { TestBed } from '@angular/core/testing';

import { AddEditNoteService } from './add-edit-note.service';

describe('AddEditNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddEditNoteService = TestBed.get(AddEditNoteService);
    expect(service).toBeTruthy();
  });
});
