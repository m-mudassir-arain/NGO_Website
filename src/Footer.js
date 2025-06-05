import React from 'react'
import SocialIcons from './SocialIcons'

function Footer() {
  return (
    <footer className='flex flex-col justify-evenly items-center p-9  bg-black text-white w-full h-full'>
            <div id='f-c-l-s' className='flex flex-wrap justify-evenly items-center w-full'>

              <div id='f-contact' className='flex flex-col justify-center items-start w-2/5 p-2'>
                  <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>
                  <p className='text-lg text-slate-300'> <span className='text-white'>Phone:</span> 1234567890</p>
                  <p className='text-lg text-slate-300'> <span className='text-white'>Email:</span> ngoweb@gmail.com</p>
                  <p className='text-lg text-slate-300'><span className='text-white'>Address:</span> 123 Main Street, NawabShah, Pakistan</p>
              </div>
              
              <div id='f-socialmedia' className='flex flex-col justify-center items-center w-1/5 p-2'>
                  <h1 className='text-3xl font-bold mb-6'>Social Media</h1>
                  <button><SocialIcons/></button>
              </div>

              <div id='f-link' className='flex flex-col justify-center items-center w-2/5 p-2'>
                  <h1 className='text-3xl font-bold mb-6'>Links</h1>
                  <ul className='flex justify-center items-center'>
                    <li><a href='/' className='m-5 text-slate-400 hover:text-white'>Home</a></li>
                    <li><a href='/About' className='m-5 text-slate-400 hover:text-white'>About</a></li>
                    <li><a href='/Program' className='m-5 text-slate-400 hover:text-white'>Program</a></li>
                    <li><a href='/Donate' className='m-5 text-slate-400 hover:text-white'>Doante</a></li>
                    <li><a href='/Events' className='m-5 text-slate-400 hover:text-white'>Events</a></li>
                    <li><a href='/Contact' className='m-5 text-slate-400 hover:text-white'>Contact</a></li>
                  </ul>
              </div>

            </div>
            <div id='copyright-section' className='border-t-2 w-full flex justify-center items-center p-3'>
                <p>&copy;Copyright 2024 NGO-Web. All Rights Resereved | Design by <span className="">M.Mudassir</span></p>
            </div>
        </footer>
  )
}

export default Footer
