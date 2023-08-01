import { useSelector } from "react-redux";
import { Note } from "../Note";
import { RootState } from "../redux";
import EditableNoteTableRow from "./EditableNoteTableRow";
// COMPONENTS
import NoteTableRow from "./NoteTableRow";
import Table from "./Table";

function NoteTable() {
    return (
        <Table headers={['Name', 'Created', 'Category', 'Content', 'Dates', '']}>
            {useSelector((state: RootState) => state).notes.map((note: Note, id) =>
                <EditableNoteTableRow key={id} note={note} />
            )}
        </Table>
    );
}

export default NoteTable;
