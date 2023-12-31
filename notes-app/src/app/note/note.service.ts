import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Note } from '../models/note.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NoteService {

    constructor(private http:HttpClient) {}

    private noteUrl = 'http://localhost:8080/api/notes';

    public getNotes() {
        return this.http.get<Note[]>(this.noteUrl);
    }

    public createNote(note) {
      return this.http.post<Note>(this.noteUrl, note);
    }

}