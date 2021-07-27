import React, { useState, useEffect, useContext } from 'react';
import { Form, TextArea, Button, Input } from 'semantic-ui-react';
import { useRouter } from 'next/router';

//context
import { Context } from '../../context/notesContext';


const EditNote = () => {
    
    const router = useRouter();
    const { notes, dispatch } = useContext(Context);

    const [noteId, setNodeId] = useState(null);
    const [ note, setNote ] = useState('');
    const [ title, setTitle ] = useState('');
    

    useEffect(() => {
        const { nid } = router.query;

        if(nid){
            setNodeId(nid);
            const noteToEdit = notes.filter(note => note.id == nid)[0];
            setTitle(noteToEdit.title);
            setNote(noteToEdit.note);
        }
    }, [router])

    
    const handleNoteChange = (e) => {
        setNote(e.target.value);
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const saveNote = () => {
        dispatch({
            type: 'EDIT_NOTE',
            payload: {
                title: title,
                note: note,
                id: noteId
            }
        });

        router.push('/');
    }

    return (
        <div className='w-full mt-20'>
             <div className='sm:flex justify-between items-center mb-4'>
                <Input placeholder='Search...' className='m-0 sm:w-1/4' value={title} onChange={handleTitleChange} />
                <div className='actions mt-2 sm:mt-0'>
                    <Button className='bg-green-400 mr-3 text-gray-700' onClick={saveNote}>SAVE</Button>
                </div>
             </div>
            <Form>
                <TextArea value={note} style={{ minHeight: 500 }} disabled={false} onChange={handleNoteChange} className='w-full'/>
            </Form>
        </div>
    )
}

export default EditNote;