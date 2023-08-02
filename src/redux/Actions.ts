import { Note } from '../Note'
import { ADD_NOTE, ARCHIVE_NOTE, CHOOSE_EDITED_NOTE, DELETE_NOTE, SET_NOTE_CATEGORY, SET_NOTE_CONTENT, SET_NOTE_NAME, VIEW_ARCHIVED } from './ActionTypes'


export const setNoteName = (note: Note, name: string) => {
    return {
        type: SET_NOTE_NAME,
        payload: {
            value: name,
            note: note,
        }
    }
}


export const setNoteContent = (note: Note, content: string) => {
    return {
        type: SET_NOTE_CONTENT,
        payload: {
            value: content,
            note: note,
        }
    }
}


export const setNoteCategory = (note: Note, category: string) => {
    return {
        type: SET_NOTE_CATEGORY,
        payload: {
            value: category,
            note: note,
        }
    }
}

export const addNote = () => {
    return {
        type: ADD_NOTE,
    }
}


export const viewArchived= () => {
    return {
        type: VIEW_ARCHIVED,
    }
}

export const chooseEditedNote = (note: number) => {
    return {
        type: CHOOSE_EDITED_NOTE,
        payload: {
            edited: note,
        }
    }
}

export const deleteNote = (note: number) => {
    return {
        type: DELETE_NOTE,
        payload: {
            edited: note,
        }
    }
}

export const archiveNote = (note: number) => {
    return {
        type: ARCHIVE_NOTE,
        payload: {
            edited: note,
        }
    }
}