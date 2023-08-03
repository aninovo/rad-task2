import { Action, createStore} from 'redux'
import { Note } from '../Note';
import { ADD_NOTE, ARCHIVE_NOTE, CHOOSE_EDITED_NOTE, DELETE_NOTE, EditNoteAction, NoteAction, SET_NOTE_CATEGORY, SET_NOTE_CONTENT, SET_NOTE_NAME, VIEW_ARCHIVED } from './ActionTypes'
// DEVTOOLS
import { composeWithDevTools } from 'redux-devtools-extension'

const initialData = [
    new Note('Shopping list', 'Task', 'Tomatoes, bread', new Date("1995-12-17T03:24:00")),
    new Note('The theory of evolution', 'Random Thought', 'The theory of evolution is a biological theory that explains how living things on Earth have their origin in other preexisting types and how they change over time.', new Date("1995-12-17T03:24:00")),
    new Note('New feature', 'Idea', 'Implement a new feature by 3/5/2023; moved from 3/4/2023', new Date("1995-12-17T03:24:00")),
    new Note('William Gaddis', 'Random Thought', 'Power is of two kinds. One is obtained by the fear of punishment and the other by acts of love. Power based on love is a thousand times more effective and permanent then the one derived from fear of punishment.', new Date("1995-12-17T03:24:00")),
    new Note('Books', 'Task', 'The Lean Startup', new Date("1995-12-17T03:24:00")),
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