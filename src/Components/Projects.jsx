import React from 'react'
import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';
import Project4 from '../assets/project4.png';
import Project5 from '../assets/project5.png';
import Project6 from '../assets/project6.png';
import Project7 from '../assets/project7.png';
import Project8 from '../assets/project8.png';

const Projects = () => {
  return (
    <div id='project'>
      <div className='w-full px-[12%] py-10' id='#about'>
        <h5 className='text-center text-3xl font-bold mt-5'>Project</h5>
        <div className='w-full flex gap-5 flex-wrap mt-5'>
          <div className="flex justify-center">
            <ul className="flex flex-wrap justify-center gap-6">
              {[
                { src: Project7, alt: '', link: 'https://verifiedvilla2.onrender.com/VerifiedVilla' },
                { src: Project8, alt: '', link: 'https://zerodha2-2.onrender.com/' },
                { src: Project1, alt: '', link: 'https://stellar-griffin-clothing.netlify.app/' },
                { src: Project2, alt: '', link: 'https://food-delivery-49.netlify.app/' },
                { src: Project3, alt: '', link: 'https://simonsays23.netlify.app/' },
                { src: Project4, alt: '', link: 'https://rohit33.netlify.app/' },
                { src: Project5, alt: '', link: 'https://tic-tac-toe-r34.netlify.app/' },
                { src: Project6, alt: '', link: 'https://dice-game-23-w.netlify.app/' },
              ].map(({ src, alt,link }, i) => (
                <li
                  key={i}
                  className="border border-black rounded flex items-center justify-center hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] duration-500 w-4/4 md:w-1/4 "
                >
                  <a href={link}><img
                    src={src}
                    className="w-full object-contain rounded"
                  /></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Projects
