import React from 'react'
import Rohit from '../assets/Me2.jpg'
import Code from '../assets/code-icon.png'
import Project from '../assets/project-icon.png'
import Vscode from '../assets/vscode.png'
import MongoDb from '../assets/mongodb.png'
import Git from '../assets/git.png'
import Text from '../assets/circular.png'
import Icon from '../assets/dev-icon.png'

const About = () => {
    return (
        <div className='w-full px-[12%] py-10' id='about'>
            <h4 className='text-center'>Introduction </h4>
            <h5 className='text-center text-3xl font-bold mt-3'>About Me</h5>
            <div className='flex flex-col gap-10 justify-center items-center xl:flex-row mt-10  '>
                <div className='relative'>
                    <img src={Rohit} alt="" className='rounded-3xl w-74 sm:w-86' />
                    <div className='w-1/3 lg:w-1/2 bg-white rounded-full aspect-square translate-x-1/4 shadow-md translate-y-1/3 absolute bottom-10 right-10'>
                        <img src={Text} alt="" className='w-full opacity-50 hover:rotate-180 duration-1000' />
                        <img src={Icon} alt="" className='w-1/4 absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 '/>
                    </div>
                </div>
                <div className='flex-1 px-0 md:px-10  text-gray-500'>
                    <p>I'm a passionate MERN Stack developer with a strong eye for design and functionality. My jI stay up-to-date with the latest tech trends to deliver applications that are not just
                        functional.</p>
                    <ul className='flex flex-col lg:flex-row gap-5 mt-5 w-full lg:max-w-3xl'>
                        <li className='w-2/2 lg:1/2 border border-gray-500 p-3 rounded hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] duration-500'>
                            <img src={Code} alt="" />
                            <h4 className='font-bold mt-3 text-black'>Frontend</h4>
                            <p className='mt-3 text-gray-500 font-mono'>Html, JavaScript, React, TailwindCss</p>
                        </li>

                        <li className='w-2/2 lg:1/2 border border-gray-500 p-3 rounded hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] duration-500'>
                            <img src={Code} alt="" />
                            <h4 className='font-bold mt-3 text-black'>Backend & DataBase</h4>
                            <p className='mt-3 text-gray-500 font-mono'>Node.js| Express.js| MongoDB</p>
                        </li>

                        <li className='w-2/2 lg:1/2 border border-gray-500 p-3 rounded hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] duration-500'>
                            <img src={Project} alt="" />
                            <h4 className='font-bold mt-3 text-black'>Project</h4>
                            <p className='mt-3 text-gray-500 font-mono'>I'll Create 3 Project in MERN Stack</p>
                        </li>

                    </ul>
                    <h4 className='mt-5 font-bold'>Tools I Used</h4>
                    <ul className='mt-5 flex gap-4'>
                        <li className='border border-black p-3 rounded hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] duration-500 '>
                            <img src={Vscode} alt="" className='w-6' />
                        </li>
                        <li className='border border-black p-3 rounded hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] duration-500 '>
                            <img src={MongoDb} alt="" className='w-6' />
                        </li>
                        <li className='border border-black p-3 rounded hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] duration-500 '>
                            <img src={Git} alt="" className='w-6' />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About