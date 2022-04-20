import React, { useContext, useState, useEffect } from "react";

//context
import { Context } from "../context/notesContext";

//components
import Sidebar from "../components/sidebar";
import NotesView from "../components/notesView";

const Notes = () => {

    const { notes, dispatch } = useContext(Context);
    const [ activeNote, setActiveNote ] = useState(null);

    useEffect(() => {
        if(notes.length){
            setActiveNote(notes[0])
        }else{
            setActiveNote(null);
        }
    }, [notes])

    return (
        <div className='homepage flex flex-space-between'>
            <Sidebar notes={notes} setActiveNote={setActiveNote} />
            <NotesView notes={notes} activeNote={activeNote} dispatch={dispatch} />
        </div>
    )
}

export default Notes;