import React from 'react';

function Contact() {
  return (
    <>
      <section id='Contact' className='h-screen flex justify-center items-center'>
        <div id='contact-section' className='flex flex-col justify-center items-center w-3/5 h-3/5'>
          <h1 className='text-6xl font-bold text-center mb-4 text-white'>Get In Touch</h1>
          <form className='w-3/5'>

            <div className='name w-full flex justify-center items-center'>
              <div className='first-name w-full m-3 border-4 border-blue-600 rounded-tl-3xl rounded-br-3xl overflow-hidden'>
                <input type='text' placeholder='First Name' className='w-full h-14 p-5 ' />
              </div>
              <div className='last-name w-full m-3 border-4 border-blue-600 rounded-tl-3xl rounded-br-3xl overflow-hidden'>
                <input type='text' placeholder='Last Name' className='w-full h-14 p-5' />
              </div>
            </div>
            
            <div className='email-phone w-full flex justify-center items-center'>
              <div className='email w-full m-3 border-4 border-blue-600 rounded-tl-3xl rounded-br-3xl overflow-hidden'>
                <input type='email' placeholder='Enter Your Email' className='w-full h-14 p-5' />
              </div>
              <div className='phone w-full m-3 border-4 border-blue-600 rounded-tl-3xl rounded-br-3xl overflow-hidden'>
                <input type='number' placeholder='Phone' className='w-full h-14 p-5' />
              </div>
            </div>

            <div className='message m-3 border-4 border-blue-600 h-40 rounded-tl-3xl rounded-br-3xl overflow-hidden'>
              <textarea placeholder='Message' className='w-full h-full p-5'/>
            </div>
            <button className='m-3 border-2 rounded-tl-3xl rounded-br-3xl overflow-hidden bg-blue-700 text-white hover:bg-blue-900 w-48 h-14 text-lg font-bold ease-in-out duration-300'>SUBMIT NOW</button>
            
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact
