import React from 'react'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "af007ffa-2d70-49e2-beea-8cce0a73b31d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            event.target.reset()
        }
    };
    return (
        <div id='contact' className='w-full flex justify-center items-center flex-col md:p-[12%] py-10'>
            <h4 className='text-center font-bold'>Connect with me</h4>
            <h5 className='text-center text-4xl font-bold mt-5'>Get in touch</h5>
            <p className='text-center mt-5'> If you have any questions, comments or feedback, please use the form below.</p>
            <form onSubmit={onSubmit} className='w-full p-4 md:w-2/3 mx-auto' method="POST">
                <div className='flex flex-col md:flex-row md:gap-5 w-full'>
                    <div className='mt-5 w-full'>
                        <input type="text" placeholder='Enter your name' name='name' className='border w-full border-black py-4 px-3 rounded mt-3 ' />
                    </div>
                    <div className='mt-5 w-full'>
                        <input type="email" placeholder='Enter your email' name='email' className='border w-full border-black py-4 px-3 rounded mt-3 ' />
                    </div>
                </div>
                <div className='mt-5'>
                    <textarea type="text" placeholder='Enter your message' name='message' className='border w-full border-black py-4 px-3 rounded mt-3 ' rows={6} ></textarea>
                </div>
                <button className='px-7 font-bold mt-5 rounded py-4 bg-blue-500 hover:bg-blue-400' type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Contact
