import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <Link href='/' passHref>
            <h1 className='varela text-green-500 cursor-pointer text-4xl py-4'>Notesify</h1>
        </Link>
    )
}

export default Navigation;