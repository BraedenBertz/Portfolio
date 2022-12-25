import React from 'react';
import baffle from 'baffle';
import { useState, useEffect } from 'react';

function Intro() {
    const [baf, doBaf] = useState(null);

    const handleBaffle = () => {
        doBaf(baf === null ? 'not done' : 'done');
    };

    useEffect(() => {
        handleBaffle();
        const target = baffle('.obfuscated')
        if (baf === 'done') return;
        target.set({
            // characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>",
            characters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            speed: 111
        })
        target.start()
        target.reveal(500, 1000)

    })

    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pd-6'>
            <h1 className='text-4xl dark:text-white md:text-7xl mb-1 md:mb-3 font-bold obfuscated'>
                Braeden Bertz
            </h1>
            <p className='text-base md:text-xl mb-3 font-medium'> Software Engineer and Mathematician</p>
            <p className='text-sm max-w-xl mb-6 font-bold'> Bio</p>
        </div>
    )
}

export default Intro;