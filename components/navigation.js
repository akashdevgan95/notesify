import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <Link href='/' passHref>
            <nav>
                <h1 className='varela green cursor-pointer'>Notesify</h1>
            </nav>
        </Link>
    )
}

export default Navigation;