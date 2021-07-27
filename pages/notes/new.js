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
        <div className='w-full mt-20'>
             <div className='sm:flex justify-between items-center mb-4'>
                <Input placeholder='Title' className='m-0 sm:w-1/4' value={title} onChange={handleTitleChange} />
                <div className='actions mt-2 sm:mt-0'>
                    <Button className='bg-green-400 mr-3 text-gray-700' onClick={handleClick}>ADD</Button>
                </div>
             </div>
            <Form>
                <TextArea value={note} style={{ minHeight: 500 }} disabled={false} onChange={handleNoteChange} className='w-full'/>
            </Form>
        </div>
    )
}

export default AddNote;