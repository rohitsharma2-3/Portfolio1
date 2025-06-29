import React, { useRef } from 'react'
import bgCover from '../assets/bg-cover.jpg'; 

const Navbar = () => {
    let sideMenuRef = useRef()

    const OpenMenu = () => {
        sideMenuRef.current.style.transform = 'translatex(0) '
    }
    const CloseMenu = () => {
        sideMenuRef.current.style.transform = 'translatex(16rem)'
    }

    return (
        <>
        {/* <div className='fixed top-0 right-0 w-12/12 translate-y-[-80%]'>
            <img src={bgCover} alt="" className='w-full' />
        </div> */}
            <nav className='flex justify-between w-full px-5 lg:p-8px xl:px-[8%] mx-auto py-4 z-10 fixed items-center'>
                <h4 className='w-28 cursor-pointer mr-14 text-2xl font-bold'>Portfolio<span className='text-red-400 rounded-full'>.</span></h4>
                <ul className='gap-5 hidden md:flex bg-white shadow-sm bg-opacity-50 rounded-4xl px-6 py-1.5'>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className='flex gap-6 items-center'>
                    <button><i className="fa-regular fa-moon text-2xl"></i></button>
                    <a href="#" className='border border-black px-4 py-1.5 rounded-2xl hidden sm:block'>Connect</a>
                    <button className='block md:hidden cursor-pointer transition-transform hover:scale-110' onClick={OpenMenu}><i className="fa-solid fa-bars text-2xl"></i></button>
                </div>

                {/* mobile */}
                <div ref={sideMenuRef} className='block md:hidden fixed top-0 bottom-0 right-0 w-56 bg-red-50 pt-16 px-6 transition duration-500'>
                    <button className='absolute top-6 z-30 right-6 md:hidden cursor-pointer' onClick={CloseMenu}><i className="fa-solid fa-xmark"></i></button>
                    <ul className='gap-5 flex flex-col md:hidden '>
                        <li><a onClick={CloseMenu} href="#top">Home</a></li>
                        <li><a onClick={CloseMenu} href="#about">About</a></li>
                        <li><a onClick={CloseMenu} href="#project">Project</a></li>
                        <li><a onClick={CloseMenu} href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar