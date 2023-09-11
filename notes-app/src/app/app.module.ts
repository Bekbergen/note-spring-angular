import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteService } from './note/note.service';
import { HttpClientModule } from "@angular/common/http";

import { NoteComponent } from './note/note.component';
import { AddNoteComponent } from './note/add-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }