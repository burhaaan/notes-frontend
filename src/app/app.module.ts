import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteViewComponent } from './pages/note-view/note-view.component';
import { HttpClientModule } from '@angular/common/http';
import { NewNoteComponent } from './pages/new-note/new-note.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteViewComponent,
    NewNoteComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
