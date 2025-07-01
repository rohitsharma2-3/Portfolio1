import React from 'react'

const Footer = () => {
    return (
        <div id='footer' >
            <div className='flex justify-center flex-col items-center'>
                <h3 className='text-4xl font-bold'>Rohit<span className='text-red-400 rounded'>.</span></h3>
                <h3 className='text-1xl font-bold text-gray-500'>mern.rohitsharma@gmail.com</h3>
            </div>
            <div className='w-10/12 mx-auto'>
                <hr className="border-t-2 border-gray-300 dark:border-gray-700 mt-10" />

                <div className='flex justify-between flex-col md:flex-row items-start mt-10'>
                    <p className='footer'>&copy; Rohit Sharma. All right reserved</p>
                    <div className='flex gap-5 items-center mb-5'>
                        <p><a className='footer' href="https://github.com/rohitsharma2-3">Github</a></p>
                        <p><a className='footer' href="https://www.linkedin.com/in/rohit-sharma-a8545b336/">Linkedin</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
