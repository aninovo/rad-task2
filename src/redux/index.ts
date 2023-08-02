import { Action, createStore} from 'redux'
import { Note } from '../Note';
import { ADD_NOTE, CHOOSE_EDITED_NOTE, EditNoteAction, NoteAction, SET_NOTE_CATEGORY, SET_NOTE_CONTENT, SET_NOTE_NAME } from './ActionTypes'
// DEVTOOLS
import { composeWithDevTools } from 'redux-devtools-extension'

const initialData = [
    new Note('name', 'Idea', 'description'),
    new Note('name', 'Idea', '11.05.2022 description'),
    new Note('name', 'Idea', 'description'),
    new Note('name', 'Idea', 'description'),
];


export type RootState = {
    viewArchived: boolean;
    notes: Note[];
    edited?: number;
}

const initialState: RootState = {
    viewArchived: false,
    notes: initialData
}

const reducer = (state = initialState, action: Action | NoteAction | EditNoteAction)
    : RootState => {
    if (action.type === SET_NOTE_NAME) {
        const payload = (action as NoteAction).payload;
        return {
            ...state,
            notes: state.notes.map(
                (note, id) => note === payload.note ? new Note(payload.value, note.category, note.description, note.creationTime, note.archived) : note,
            )
        };
    }
    if (action.type === SET_NOTE_CONTENT) {
        const payload = (action as NoteAction).payload;
        return {
            ...state,
            notes: state.notes.map(
                (note, id) => note === payload.note ? new Note(note.name, note.category, payload.value, note.creationTime, note.archived) : note,
            )
        };
    }
    if (action.type === SET_NOTE_CATEGORY) {
        const payload = (action as NoteAction).payload;
        return {
            ...state,
            notes: state.notes.map(
                (note, id) => note === payload.note ? new Note(note.name, payload.value, note.description, note.creationTime, note.archived) : note,
            )
        };
    }
    if (action.type === CHOOSE_EDITED_NOTE) {
        const payload = (action as EditNoteAction).payload;
        return {
            ...state,
            edited: payload.edited
        };
    }
    if (action.type === ADD_NOTE) {
        const newState = {
            ...state,
            notes: [...state.notes, new Note('', 'Idea', '', new Date(Date.now()))]
        }
        newState.edited = newState.notes.length - 1;
        return newState;
    }
        
    return state;
}


export const store = createStore(reducer, composeWithDevTools());