import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react'
import NavMenuItems from './NavMenuItems';

function NavMenu() {
    const [show, setShow] = useState(false);
    return (
        <nav className='top-0 mb-10 sticky w-full z-50'>
            <div className={(show ? "top-2 flex flex-row gap-4 bg-stone-900" : "top-2 flex flex-row gap-4")} >
                <Hamburger color="#4FD1C5" label="show menu" rounded className='hamburger'
                    onToggle={() => setShow(toggled => !toggled)}
                />
                <NavMenuItems show={!show} />
            </div>
        </nav>
    )
}

export default NavMenu;