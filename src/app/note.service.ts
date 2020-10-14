import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private webService: WebService) { }

  getNotes() {
    return this.webService.get('notes');
  }
  createNote(description: string) {
    return this.webService.post('notes', {description})
  }
  deleteNote(noteId: string) {
    return this.webService.delete(`notes/${noteId}`)
  }
  editNote(noteId: string, description: string) {
    return this.webService.patch(`notes/${noteId}`, {description})
  }
  getNote(noteId: string) {
    return this.webService.get(`notes/${noteId}`)
  }
}
