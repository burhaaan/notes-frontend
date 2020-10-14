import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Note from 'src/app/models/note';
import { NoteService } from "src/app/note.service";


@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  notes: Note[] = []
  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes: Note[]) => this.notes = notes)
  }

  addNoteClick() {
   this.router.navigate(['notes/new-note'])
  }

  deleteNote(note: Note)
  {
    this.noteService.deleteNote(note._id).subscribe(() => this.notes = this.notes.filter(n => n._id !== note._id))
  }
  editNoteClick(note: Note)
  {
    this.router.navigate(['notes', note._id]) // .com/users
  }
  

}
