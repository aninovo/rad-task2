import { useSelector } from "react-redux";
import { Note } from "../Note";
import { RootState } from "../redux";
import EditableNoteTableRow from "./EditableNoteTableRow";
// COMPONENTS
import NoteTableRow from "./NoteTableRow";
import Table from "./Table";

function NoteTable() {
    const noteElement = (note: Note, id: number, edited: boolean) => {
        if (edited) return <EditableNoteTableRow key={id} note={note} />;
        return <NoteTableRow key={id} note={note} id={id} />;
    };
    const state = useSelector((state: RootState) => { return { notes: state.notes, edited: state.edited } });
    return (
        <Table headers={['Name', 'Created', 'Category', 'Content', 'Dates', '']}>
            {
                state.notes.map((note: Note, id) => noteElement(note, id, state.edited === id)
            )}
        </Table>
    );
}

export default NoteTable;
