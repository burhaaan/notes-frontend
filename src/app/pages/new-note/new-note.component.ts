import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from 'src/app/note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  constructor(
    private noteService: NoteService,
    private router: Router,
  ) { }
  editData: string

  ngOnInit(): void {
  }
  addNote(description: string) {
    this.noteService.createNote(description).subscribe(() => this.router.navigate(['/notes']))
  }

}
