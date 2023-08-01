import React from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/Actions";

type Props = {
    children: React.ReactElement;
}

function NewNoteButton( props: Props) {

    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(addNote())}>
            {props.children}
        </button>
    )
    
}

export default NewNoteButton;