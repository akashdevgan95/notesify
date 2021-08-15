import React, { useState, useContext } from 'react';
import { Form, TextArea, Button, Input } from 'semantic-ui-react';
import { useRouter } from 'next/router';

// Notes context
import { Context } from '../../context/notesContext';

const AddNote = () => {

    const [ title, setTitle ] = useState('');
    const [ note, setNote ] = useState('');
    const { dispatch } = useContext(Context);
    const router = useRouter();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    
    const handleNoteChange = (e) => {
        setNote(e.target.value);
    }

    const handleClick = () => {

        const noteToAdd = {
            title: title,
            note: note,
            id: Math.floor(Math.random() * 9999)
        };

        dispatch({
            type: 'ADD_NOTE',
            payload: noteToAdd
        });
        router.push('/');
    }

    return (
        <div className='w-full new note'>
             <div className='flex flex-justify-between'>
                <Input placeholder='Title' value={title} onChange={handleTitleChange} />
                <Button className='bg-green white varela' onClick={handleClick}>ADD</Button>
             </div>
            <Form>
                <TextArea value={note} style={{ minHeight: 500 }} disabled={false} onChange={handleNoteChange} className='w-full'/>
            </Form>
        </div>
    )
}

export default AddNote;