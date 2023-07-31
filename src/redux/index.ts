import { Action, createStore } from 'redux'
import { Note } from '../Note';

const initialData = [
    new Note('name', 'Idea', 'description'),
    new Note('name', 'Idea', '11.05.2022 description'),
    new Note('name', 'Idea', 'description'),
    new Note('name', 'Idea', 'description'),
];

const initialState = {
    viewArchived: false,
    notes: initialData,
}

const reducer = (state = initialState, action: Action) => {
    /*
    if (action.type === 'type')
        return {
            ...state,
        };
        */ 
    return state;
}

export const store = createStore(reducer);

export type RootState = ReturnType<typeof reducer>;