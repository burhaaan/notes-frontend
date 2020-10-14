import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { NewNoteComponent } from './pages/new-note/new-note.component';
import { NoteViewComponent } from './pages/note-view/note-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'notes', pathMatch: 'full'},
  {path: 'notes', component: NoteViewComponent},
  {path: 'notes/new-note', component: NewNoteComponent},
  {path: 'notes/:_id', component: EditNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
