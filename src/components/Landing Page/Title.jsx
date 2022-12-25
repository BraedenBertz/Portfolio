import React from 'react';

function Title({children, id}) {
    return (
        <h1 className='text-2xl decoration-4 mb-5 text-[#B200AC]'
            id={id && id}
            >{children}
        </h1>
    )
}

export default Title;