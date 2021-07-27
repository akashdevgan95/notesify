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
        <div className='sm:w-8/12'>
             <Segment className='sm:flex justify-between items-center'>
                <Header as='h1' className='m-0'>{activeNote ? activeNote.title : ''}</Header>
                {
                    activeNote && (
                        <div className='actions mt-2 sm:mt-0'>
                            <Link href={`/notes/${activeNote.id}`}>
                                <Button className='bg-green-400 mr-3 text-gray-700'>EDIT</Button>
                            </Link>
                            <Button secondary onClick={ handleDelete }>DELETE</Button>
                        </div>
                    )
                }
             </Segment>
            <Segment style={{ minHeight: 500 }} className='w-full'>
                { activeNote ? activeNote.note : '' }
            </Segment>
        </div>
    )
}

export default NotesView;