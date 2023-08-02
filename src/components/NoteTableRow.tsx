import React from 'react';
import { useDispatch } from 'react-redux';
import { Note } from '../Note';
import { chooseEditedNote } from '../redux/Actions';

type Props = {
    note: Note;
    id: number;
}

const dateDisplayOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric', month: 'long', day: 'numeric'
};

export default function NoteTableRow(props: Props)
    : React.ReactElement {
    const note = props.note;
    const dateStrings = note.dates.map(date => date.toLocaleDateString('uk', dateDisplayOptions)).join(', ');
    const creationDateString = note.creationTime.toLocaleDateString('uk', dateDisplayOptions);
    const dispatch = useDispatch();

    return (<tr>
        <td key="name">
            {note.name}
        </td>
        <td key="creationTime" >
            {creationDateString}
        </td>
        <td key="category" >
            {note.category}
        </td>
        <td key="description">
            {note.description}
        </td>
        <td key="dateStrings">
            {dateStrings}
        </td>
        <td key="buttons">
            <button onClick={() => dispatch(chooseEditedNote(props.id))}>
            Edit
            </button>
        </td>
    </tr>
    );
}