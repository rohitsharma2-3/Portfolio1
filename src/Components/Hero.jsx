import React from 'react';
import Rohit from '../assets/me.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
    return (
        <div id='home' className="flex flex-col justify-center items-center min-h-screen bg-white w-11/12 max-w-3xl mx-auto text-center ">
            <img src={Rohit} alt="Rohit Sharma" className="w-32  rounded-full object-cover mx-auto" />
            <h5 className="text-2xl font-semibold">Hi! I'm Rohit Sharma</h5>
            <p className='mt-3 mb-3 font-bold text-1xl md:text-4xl'>MERN Stack Developer.</p>
            <p className='text-gray-500'>I build modern web apps using the MERN stack. <br className='hidden md:block' />
           Focused on clean code, performance, and great UX.</p>
            <div className='mt-5 flex gap-10 '>
                <p className='bg-blue-500 text-white hover:text-black py-2 px-6 hover:bg-white hover:border border-black rounded'><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></p>
                <a href="Rohit_Resume.docx" download className='bg-white border border-black rounded py-2 px-6  hover:bg-blue-500 hover:text-white'>Resume</a>
            </div>
        </div>
    );
};

export default Hero;