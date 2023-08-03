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
    return (<tr className="bg-white">
        <td key="name" className="overflow-hidden truncate w-2">
            <input type="text" value={note.name} onChange={(e) => {
                const value = e.target.value;
                dispatch(setNoteName(note, value));
            }
            } />
        </td>
        <td key="creationTime" className="overflow-hidden truncate w-2">
            {creationDateString}
        </td>
        <td key="category" className="overflow-hidden truncate w-2">
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
        <td key="description" className="overflow-hidden truncate w-2">
            <input type="text" value={note.description} onChange={(e) => {
                const value = e.target.value;
                dispatch(setNoteContent(note, value));
            }
            } />
        </td>
        <td key="dateStrings" className="overflow-hidden truncate w-2">
            {dateStrings}
        </td>
        <td key="buttons">
            <button className="items-center justify-center  p-1 m-1 text-slate-800 border border-slate-200"
                onClick={() => dispatch(chooseEditedNote(-1))}>
                Save
            </button>
            <button className="items-center justify-center  p-1 m-1 text-slate-800 border border-slate-200"
                onClick={() => dispatch(archiveNote(props.id))}>
                Archive
            </button>
            <button className="items-center justify-center  p-1 m-1 text-slate-800 border border-slate-200"
                onClick={() => dispatch(deleteNote(props.id))}>
                Delete
            </button>
        </td>
    </tr>
    );
}