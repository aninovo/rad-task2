import React from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/Actions";

type Props = {
    children: React.ReactElement;
}

function NewNoteButton( props: Props) {

    const dispatch = useDispatch();
    return (
        <button className="items-center justify-center  p-1 m-1  text-slate-800 border border-slate-200"
            onClick={() => dispatch(addNote())}>
            {props.children}
        </button>
    )
    
}

export default NewNoteButton;