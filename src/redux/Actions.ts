import { Note } from '../Note'
import { ADD_NOTE, SET_NOTE_CONTENT, SET_NOTE_NAME } from './ActionTypes'


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

export const addNote = () => {
    return {
        type: ADD_NOTE,
    }
}