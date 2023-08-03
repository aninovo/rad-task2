import React from 'react';
import { useDispatch } from 'react-redux';
import { Note } from '../Note';
import { archiveNote, chooseEditedNote, deleteNote } from '../redux/Actions';

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

    return (<tr className="bg-slate-100">
        <td key="name" className="overflow-hidden truncate w-2">
            {note.name}
        </td>
        <td key="creationTime" className="overflow-hidden truncate w-2">
            {creationDateString}
        </td>
        <td key="category" className="overflow-hidden truncate w-2">
            {note.category}
        </td>
        <td key="description" className="overflow-hidden truncate w-2">
            {note.description}
        </td>
        <td key="dateStrings" className="overflow-hidden truncate w-2">
            {dateStrings}
        </td>
        <td key="buttons">
            <button className="items-center justify-center  p-1 m-1 text-slate-800 border border-slate-200"
                onClick={() => dispatch(chooseEditedNote(props.id))}>
                Edit
            </button>
            <button className="items-center justify-center  p-1 m-1 text-slate-800 border border-slate-200"
                onClick={() => dispatch(archiveNote(props.id))}>
                Archive
            </button>
            <button className="items-center justify-center p-1 m-1 text-slate-800 border border-slate-200"
                onClick={() => dispatch(deleteNote(props.id))}>
                Delete
            </button>
        </td>
    </tr>
    );
}