import React from "react";
import { useDispatch } from "react-redux";
import { addNote, viewArchived } from "../redux/Actions";

type Props = {
    children: React.ReactElement;
}

function ViewArchivedButton( props: Props) {

    const dispatch = useDispatch();
    return (
        <button className="items-center justify-center  p-1 m-1  text-slate-800 border border-slate-200"
            onClick={() => dispatch(viewArchived())}>
            {props.children}
        </button>
    )
    
}

export default ViewArchivedButton;