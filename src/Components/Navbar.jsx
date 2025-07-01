import React, { useEffect, useRef, useState } from 'react'
import MoonIcon from '../assets/moon_icon.png'
import AnchorLink  from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
    let sideMenuRef = useRef()
    const [scroll, setScroll] = useState(false)
    const [hover, setHover] = useState('home')


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
    }, []);


    const OpenMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0) '
    }
    const CloseMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    return (
        <nav className={`flex justify-between w-full px-5 lg:p-8px xl:px-[8%] mx-auto py-6 fixed items-center z-50 bg-white/80 backdrop-blur-md ${!scroll ? '' : 'shadow-md'}`}>
            <h4 className='w-28 cursor-pointer mr-14 text-2xl font-bold'>Portfolio<span className='text-red-400 rounded-3xl'>.</span></h4>
            <ul className={`gap-7 hidden md:flex cursor-pointer ${!scroll ? 'bg-white shadow-md rounded-4xl px-10 py-3' : ''}`}>
                <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={() => setHover('home')} className={`${hover === "home" ? 'text-blue-500' : ''}`}>Home</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setHover('about')} className={`${hover === "about" ? 'text-blue-500' : ''}`} >About</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={() => setHover('skills')} className={`${hover === "skills" ? 'text-blue-500' : ''}`} >Skills</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={() => setHover('project')} className={`${hover === "project" ? 'text-blue-500' : ''}`}  >Project</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setHover('contact')} className={`${hover === "contact" ? 'text-blue-500' : ''}`} >Contact</p></AnchorLink></li>
            </ul>
            <div className='flex gap-5 items-center'>
                {/* <button className='pb-1 md:pb-0'><img src={MoonIcon} alt="" className='w-6 h-6 object-contain' /></button> */}
                <a href="#" className='border border-black px-4 py-1.5 rounded-2xl hidden lg:block'>Connect</a>
                <button className='block md:hidden cursor-pointer transition-transform hover:scale-110' onClick={OpenMenu}><i className="fa-solid fa-bars text-2xl"></i></button>
            </div>

            {/* mobile */}
            <div ref={sideMenuRef} style={{ transform: 'translateX(16rem)' }} className='block md:hidden fixed top-0 bottom-0 right-0 min-h-screen w-56 bg-red-50 pt-16 px-6 transition duration-500'>
                <button className='absolute top-6 z-30 right-6 md:hidden cursor-pointer' onClick={CloseMenu}><i className="fa-solid fa-xmark"></i></button>
                <ul className='gap-5 flex flex-col md:hidden '>
                    <li><a onClick={CloseMenu} href="#top">Home</a></li>
                    <li><a onClick={CloseMenu} href="#about">About</a></li>
                    <li><a onClick={CloseMenu} href="#project">Project</a></li>
                    <li><a onClick={CloseMenu} href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;