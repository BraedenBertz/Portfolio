import React, { useEffect, useState } from 'react';
import Pdf from '../../data/Resume.pdf';

function NavMenuItems({ show }) {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const sun = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
        </svg>
    );

    const linkedInButton = (
        <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zM8.95 9.4H6.16v8.1h2.8V9.4zm6.84-.19c-1.32 0-2 .63-2.38 1.16l-.13.18V9.4h-2.79l.01.49V17.5h2.78v-4.52a1.52 1.52 0 0 1 1.52-1.64c.96 0 1.37.66 1.41 1.66v4.5H19v-4.64c0-2.49-1.37-3.65-3.2-3.65zM7.58 5.5C6.62 5.5 6 6.1 6 6.9c0 .73.54 1.32 1.38 1.4h.18c.97 0 1.57-.62 1.57-1.4-.01-.8-.6-1.4-1.55-1.4z"
            />
        </svg>
    );

    const moon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
        </svg>
    );

    const github = (
        <svg xmlns="http://www.w3.org/2000/svg" stroke="white" fill='none'
            className="w-6 h-6" width="16" height="16" viewBox="0 0 16 16">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
    );

    const resume = (
        <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
        ><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" /></svg>
    );

    const buttonCss = 'left--20 mt-3 h-7 bg-[#B200AC] dark:bg-[#B200AC] text-lg px-1 \
    rounded-md transition-opacity duration-500 ease-in-out  hover:opacity-75 transform'

    return (
        <>
            <div className='flex flew-row gap-5'>
                <button type="button" onClick={handleThemeSwitch}
                    className={(show ? 'visibility: hidden' : 'left-20 mt-3 h-7 bg-violet-300 dark:bg-orange-300 text-lg px-1\
                        rounded-md ease-in-out duration-400 peer/Theme')}>
                    {theme === 'dark' ? sun : moon}
                </button>
                <button type="button" onClick={() => openInNewTab('https://www.linkedin.com/in/braeden-bertz-261289160/')}
                    className={(show ? 'visibility: hidden' : buttonCss + " peer/LinkedIn dark:peer/LinkedIn2")}>
                    {linkedInButton}
                </button>
                <button type="button" onClick={() => openInNewTab('https://github.com/BraedenBertz')} title='Github'
                    className={(show ? 'visibility: hidden' : buttonCss + ' peer/Github')}>
                    {github}
                </button>
                <button type="button" onClick={() => window.open(Pdf)}
                    className={(show ? 'visibility: hidden ' : buttonCss + ' peer/Resume')}>
                    {resume}
                </button>
                <span className='hidden peer-hover/Theme:block mt-3.5 text-white'> Change Theme </span>
                <span className='hidden peer-hover/LinkedIn:block mt-3.5 text-white'> LinkedIn </span>
                <span className='hidden peer-hover/Github:block mt-3.5 text-white'> Github </span>
                <span className='hidden peer-hover/Resume:block mt-3.5 text-white'> Resume </span>
            </div >
        </>
    )
}

export default NavMenuItems;