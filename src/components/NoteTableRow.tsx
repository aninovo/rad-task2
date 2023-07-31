import React, { ReactElement } from 'react';
import { Note } from '../Note';

type Props = {
    note: Note;
}

const dateDisplayOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric', month: 'long', day: 'numeric'
};

export default function NoteTableRow(props: Props)
    : React.ReactElement {
    const note = props.note;
    const dateStrings = note.dates.map(date => date.toLocaleDateString('uk', dateDisplayOptions)).join(', ');
    const creationDateString = note.creationTime.toLocaleDateString('uk', dateDisplayOptions);
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
            Buttons
        </td>
    </tr>
    );
}