import React from "react";
import { useDispatch } from "react-redux";
import { addNote, viewArchived } from "../redux/Actions";

type Props = {
    children: React.ReactElement;
}

function ViewArchivedButton( props: Props) {

    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(viewArchived())}>
            {props.children}
        </button>
    )
    
}

export default ViewArchivedButton;