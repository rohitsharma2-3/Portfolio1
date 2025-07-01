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
                <div className='flex justify-between items-center mt-10'>
                    <p>&copy; Rohit Sharma. All right reserved</p>
                    <ul className='flex gap-5 mb-5'>
                        <li><a href="#">Github</a></li>
                        <li><a href="#">Linkedin</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer
