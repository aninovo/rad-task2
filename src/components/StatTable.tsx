import { useSelector } from "react-redux";
import { Note } from "../Note";
import { RootState } from "../redux";
// COMPONENTS
import StatTableRow from "./StatTableRow";
import Table from "./Table";

function StatTable() {
    const notes = useSelector((state: RootState) => state.notes);
    return (
        <Table headers={['Category', 'Active', 'Archived']}>
            {Note.categories.map((cat, id) =>
                <StatTableRow key={id} category={cat} notes={notes} />
            )}
        </Table>
    );
}

export default StatTable;
