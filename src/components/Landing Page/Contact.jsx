import React from 'react';
import Title from './Title';
import { useRef } from 'react'


function Contact() {
    const emailRef = useRef(null);

    function isValidEmail(e) {
        e.preventDefault();
        console.log("msg sent");
    }

    return (
        <>
            <div className='margin-auto mt-20'>
                <Title >&lt;contact&gt;</Title>
            </div>
            <div className='flex flex-col mb-10 mx-auto'>
                <div className='flex justify-left items-center mx-20'>
                    <form
                        action="https://getform.io/f/19ecc392-ab8a-40a1-bd7e-70720d237ab5"
                        method='POST'
                        className='flex flex-col w-full md:w-7/12'
                        onSubmit={isValidEmail}
                    >
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
                            placeholder='Want to get in touch? Feel free to write something here...'
                            rows='10'
                            className='mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                            required
                        >
                        </textarea>
                        <button type='submit' className='text-center inline-block px-8 py-3 w-max text-base 
                    font-medium rounded-md text-white bg-gradient-to-r from-[#B200AC] to-pink-500 drop-shadow-md
                    hover:opacity-75 transform'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <div className='margin-auto mt-4'>
                <Title >&lt;/contact&gt;</Title>
            </div>
        </>);
}

export default Contact;