import BootStrap from '../assets/Bootstrap.png'
import Css from '../assets/Css.png'
import Express from '../assets/Express.png'
import HTML from '../assets/HTML.png'
import JavaScript from '../assets/ja.jpeg'
import MongoDb from '../assets/MD.png'
import Node from '../assets/Node.png'
import Tailwind from '../assets/Tailwind.png'
import React from '../assets/React.png'

const Skills = () => {
    return (
        <div className='w-full px-[12%] py-10' id='skills'>
            <h5 className='text-center text-3xl font-bold mt-5'>Project</h5>
            <div className='w-full flex gap-5 flex-wrap mt-5'>
                <div className="flex justify-center">
                    <ul className="mt-5 flex flex-wrap justify-center gap-4">
                        {[
                            { src: MongoDb, alt: "MongoDB", title: "MongoDB" },
                            { src: Express, alt: "Express.js", title: "Express" },
                            { src: React, alt: "React.js", title: "React" },
                            { src: Node, alt: "Node.js", title: "Node" },
                            { src: HTML, alt: "HTML", title: "HTML" },
                            { src: Css, alt: "CSS", title: "CSS" },
                            { src: JavaScript, alt: "JavaScript", title: "JavaScript" },
                            { src: Tailwind, alt: "Tailwind CSS", title: "Tailwind" },
                            { src: BootStrap, alt: "Bootstrap", title: "Bootstrap" },
                        ].map(({ src, alt, title }, i) => (
                            <li
                                key={i}
                                className="border border-black p-4 rounded flex items-center justify-center hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] duration-500 w-20 h-20 md:w-40 md:h-40"
                            >
                                <img
                                    src={src}
                                    alt={alt}
                                    title={title}
                                    className="w-30 h-30 object-contain"
                                />
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Skills