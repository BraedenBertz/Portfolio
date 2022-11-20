import React from 'react';
import Title from './Title';
import {useRef} from 'react'
import {useState} from 'react'




function Contact() {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const emailRef = useRef(null);

    function isValidEmail(e) {
        e.preventDefault();
        console.log("msg sent");    
    }

    return (
        <div className='flex flex-col mb-10 mx-auto'>
            <div className='flex justify-center items-center'>
                <form 
                    action="https://getform.io/f/19ecc392-ab8a-40a1-bd7e-70720d237ab5"
                    method='POST'
                    className='flex flex-col w-full md:w-7/12'
                    onSubmit={isValidEmail}
                >
                <Title>Contact</Title>
                <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder='Name'
                    className='mb-1 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    required
                    
                    />
                <input
                    type="text"
                    name="email"
                    required
                    autoComplete="off"
                    placeholder='Email'
                    className='mb-1 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    ref={emailRef}
                    /> 
                    <textarea
                    name='message'
                    placeholder='Message'
                    rows='10'
                    className='mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    required
                    >
                    </textarea>
                    <button type='submit' className='text-center inline-block px-8 py-3 w-max text-base 
                    font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-pink-500 drop-shadow-md
                    hover:stroke-sky-700'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;