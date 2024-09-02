import { useEffect, useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState('false');

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') setDarkMode(false);
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div className='relative w-14 h-8 flex items-center border-2 drop-shadow-2xl bg-white dark:bg-slate-900 cursor-pointer rounded-full p-1 duration-300' onClick={() => setDarkMode(!darkMode)}>
            <BsSunFill className='text-yellow-400 shadow-xl' size={16} />
            <div className={`absolute bg-gray-400 dark:bg-slate-600 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'left-[]2px]' : 'right-[2px]'}`}>
            </div>
            <FaMoon className='ml-auto text-white' size={16} />
        </div>
    )
}

export default ThemeToggle