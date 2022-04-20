import React from 'react';
import Link from 'next/link';
import { Header, Segment, Button } from 'semantic-ui-react';

const NotesView = ({activeNote, dispatch}) => {

    const handleDelete = () => {
        
        dispatch({
            type: 'DELETE_NOTE',
            payload: {
                id: activeNote.id
            }
        })
    }

    return (
        <div className='notes-view'>
             <Segment className='flex flex-space-between'>
                <Header as='h1' className='varela'>{activeNote ? activeNote.title : ''}</Header>
                {
                    activeNote && (
                        <div className='actions'>
                            <Link href={`/notes/${activeNote.id}`}>
                                <Button className='bg-green white varela'>EDIT</Button>
                            </Link>
                            <Button secondary className='varela' onClick={ handleDelete }>DELETE</Button>
                        </div>
                    )
                }
             </Segment>
            <Segment style={{ minHeight: 500 }} className='w-full varela'>
                { activeNote ? activeNote.note : '' }
            </Segment>
        </div>
    )
}

export default NotesView;