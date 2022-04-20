import React, { createContext, useReducer } from 'react';
import lscache from 'lscache';


export const Context = createContext();

const reducer = (state, action) => {
    const {type, payload} = action;

    if(type === 'ADD_NOTE'){
        lscache.set('allNotes', [...state, { ...payload }]);
        return [...state, { ...payload }]
    }

    if(type === 'DELETE_NOTE'){
        const { id } = payload;
        const filteredNotes = state.filter(note => note.id !== id);
        lscache.set('allNotes', filteredNotes);
        return filteredNotes;
    }

    if(type === 'EDIT_NOTE'){
        const { id, title, note } = payload;
        const filteredNotes = [...state.filter(note => note.id != id), { id, title, note }];
        lscache.set('allNotes', filteredNotes);
        return filteredNotes;
    }
}

const initialState = lscache.get('allNotes') || [];

const NotesContext = ({ children }) => {

    const [notes, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{notes, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export default NotesContext;
