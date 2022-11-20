import React from 'react';

function Footer() {
    return (
        <div className='py-5 text-center'>
            <p className='text-sm mt-2 color-gray'>
                &copy; {new Date().getFullYear()} Braeden Bertz. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;