import { Action} from 'redux'
import { Note } from '../Note';

export const SET_NOTE_NAME = 'SET_NOTE_NAME';
export const SET_NOTE_CONTENT = 'SET_NOTE_CONTENT';

export const ADD_NOTE = 'ADD_NOTE';

export interface NoteAction extends Action {
    payload: {
        value: string;
        note: Note;
    }
}