import React, { ReactElement } from 'react';
import { Note } from '../Note';

type Props = {
    notes: Note[];
    category: string;
}

export default function StatTableRow(props: Props)
    : React.ReactElement {
    const categoryNotes : Note[] = props.notes.filter(note => note.category === props.category);
    const active = categoryNotes.reduce(
        (total: number, note: Note) => !(note.archived) ? total + 1 : total,
        0);
    const archived = categoryNotes.reduce(
        (total: number, note: Note) => (note.archived) ? total + 1 : total,
        0);
    return (<tr className="bg-slate-100">
        <td key="categoryName">
            {props.category}
        </td>
        <td key="active" >
            {active}
        </td>
        <td key="archived" >
            {archived}
        </td>
    </tr>
    );
}