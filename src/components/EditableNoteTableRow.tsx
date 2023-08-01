import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Note } from '../Note';
import { setNoteContent, setNoteName } from '../redux/Actions';

type Props = {
    note: Note;
}

const dateDisplayOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric', month: 'long', day: 'numeric'
};

export default function EditableNoteTableRow(props: Props)
    : React.ReactElement {
    const note = props.note;
    const dateStrings = note.dates.map(date => date.toLocaleDateString('uk', dateDisplayOptions)).join(', ');
    const creationDateString = note.creationTime.toLocaleDateString('uk', dateDisplayOptions);

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
            {note.category}
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
            Buttons
        </td>
    </tr>
    );
}