import { Action} from 'redux'
import { Note } from '../Note';

export const SET_NOTE_NAME = 'SET_NOTE_NAME';
export const SET_NOTE_CONTENT = 'SET_NOTE_CONTENT';
export const SET_NOTE_CATEGORY = 'SET_NOTE_CATEGORY';

export const CHOOSE_EDITED_NOTE = 'CHOOSE_EDITED_NOTE';

export const ADD_NOTE = 'ADD_NOTE';
export const ARCHIVE_NOTE = 'ARCHIVE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const VIEW_ARCHIVED = 'VIEW_ARCHIVED';


export interface NoteAction extends Action {
    payload: {
        value: string;
        note: Note;
    }
}

export interface EditNoteAction extends Action {
    payload: {
        edited: number;
    }
}