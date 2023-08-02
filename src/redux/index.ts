import { Action, createStore} from 'redux'
import { Note } from '../Note';
import { ADD_NOTE, ARCHIVE_NOTE, CHOOSE_EDITED_NOTE, DELETE_NOTE, EditNoteAction, NoteAction, SET_NOTE_CATEGORY, SET_NOTE_CONTENT, SET_NOTE_NAME, VIEW_ARCHIVED } from './ActionTypes'
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

    if (action.type === ARCHIVE_NOTE) {
        const payload = (action as EditNoteAction).payload;
        return {
            ...state,
            notes: state.notes.map(
                (note, id) => id === payload.edited ? new Note(note.name, note.category, note.description, note.creationTime, !note.archived) : note,
            )
        }
    }
    if (action.type === DELETE_NOTE) {
        const payload = (action as EditNoteAction).payload;
        return {
            ...state,
            notes: state.notes.filter((note, id) => id !== payload.edited )
        }
    }
    if (action.type === ADD_NOTE) {
        const newState = {
            ...state,
            viewArchived: false,
            notes: [...state.notes, new Note('name', 'Idea', 'content', new Date(Date.now()))]
        }
        return newState;
    }
    if (action.type === VIEW_ARCHIVED) {
        const newState = {
            ...state,
            viewArchived: !state.viewArchived
        }
        return newState;
    }
        
    return state;
}


export const store = createStore(reducer, composeWithDevTools());