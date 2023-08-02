import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Note } from '../Note';
import { archiveNote, chooseEditedNote, deleteNote, setNoteCategory, setNoteContent, setNoteName } from '../redux/Actions';


type Props = {
    note: Note;
    id: number;
}

const dateDisplayOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric', month: 'long', day: 'numeric'
};

export default function EditableNoteTableRow(props: Props)
    : React.ReactElement {
    const note = props.note;
    const dateStrings = note.dates.map(date => date.toLocaleDateString('uk', dateDisplayOptions)).join(', ');
    const creationDateString = note.creationTime.toLocaleDateString('uk', dateDisplayOptions);
    const categories = Note.categories;
    const dispatch = useDispatch();
    return (<tr>
        <td key="name">
            <input type="text" value={note.name} onChange={(e) => {
                const value = e.target.value;
                dispatch(setNoteName(note, value));
            }
            } />
        </td>
        <td key="creationTime" >
            {creationDateString}
        </td>
        <td key="category" >
            <select onChange={(e) => {
                const value = e.target.value;
                dispatch(setNoteCategory(note, value));
            }
            }
                value={note.category}>
                {categories.map(category =>
                    <option value={category}>{category}</option>
                )}
            </select>
        </td>
        <td key="description">
            <input type="text" value={note.description} onChange={(e) => {
                const value = e.target.value;
                dispatch(setNoteContent(note, value));
            }
            } />
        </td>
        <td key="dateStrings">
            {dateStrings}
        </td>
        <td key="buttons">
            <button onClick={() => dispatch(chooseEditedNote(-1))}>
                Save
            </button>
            <button onClick={() => dispatch(archiveNote(props.id))}>
                Archive
            </button>
            <button onClick={() => dispatch(deleteNote(props.id))}>
                Delete
            </button>
        </td>
    </tr>
    );
}