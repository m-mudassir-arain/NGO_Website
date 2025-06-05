import React from 'react'
import {useNavigate } from 'react-router-dom'
import program_1 from './assets/h-program-1.jpg'
import program_2 from './assets/h-program-2.jpg'
import program_3 from './assets/h-program-3.jpg'

function Program() {
  const navigate = useNavigate();
  const handleDonateClick = () =>{
    navigate('/Donate');
  }
  return (
    <>
      <section id='Program' className='h-screen flex justify-center items-center'>
        <div id='program-section' className='flex flex-col justify-center items-center w-3/5 h-3/5 p-8'>

          <h1 id='program-heading' className='text-6xl font-bold text-white mb-8'>We Help the Helpless</h1>
          <p className='text-white text-xl w-3/5'>
            Sustainable development, healthcare, and education are the main focuses of our activities. We give people access to first-rate education, necessary healthcare, 
            and tools that support long-term community development and self-sufficiency.
          </p>

        </div>
      </section>
      {/* --------------Sub-Programs-section----------------------- */}
      <section id='sub-program' className='flex flex-col justify-center items-center'>

        <div id='sub-program-1' className='flex justify-center items-center w-3/5'>

          <div id='s-p1-left' className='prog-text flex flex-col justify-center items-start w-1/2 p-3'>
            <p className='text-blue-700 mb-10'>Program-1</p>
            <h1 id='s-p1-heading' className='text-5xl font-bold mb-8'>Helping the Homeless During the Holydays</h1>
            <button id='s-p1-btn' className='border-2 rounded-xl bg-blue-700 text-white hover:bg-blue-900 w-48 h-12 font-bold ease-in-out duration-300' onClick={handleDonateClick}>DONATE NOW</button>
          </div>
          <div id='s-p1-right' className='pro-img w-1/2'>
            <img className='w-full rounded-br-3xl rounded-tl-3xl' alt='ProgramSectionImage' src={program_1}/>
          </div>

        </div>
        <div id='sub-program-2' className='flex justify-evenly items-center w-3/5'>

          <div id='s-p2-left' className='pro-img w-1/2'>
            <img className='w-full rounded-bl-3xl rounded-tr-3xl' alt='ProgramSectionImage' src={program_2} />
          </div>
          <div id='s-p2-right' className='prog-text flex flex-col justify-center items-start w-1/2 p-3'>
            <p className='text-blue-700 mb-10'>Program-2</p>
            <h1 id='s-p2-heading' className='text-5xl font-bold mb-8'>Providing Healthcare Services to Communities</h1>
            <button id='s-p2-btn' className='border-2 rounded-xl bg-blue-700 text-white hover:bg-blue-900 w-48 h-12 font-bold ease-in-out duration-300' onClick={handleDonateClick}>DONATE NOW</button>
          </div>

        </div>
        <div id='sub-program-3' className='flex justify-center items-center w-3/5'>

          <div id='s-p3-left' className='prog-text flex flex-col justify-center items-start w-1/2 p-3'>
            <p className='text-blue-700 mb-10'>Program-1</p>
            <h1 id='s-p3-heading' className='text-5xl font-bold mb-8'>Primary Education for Indigenous Children</h1>
            <button id='s-p3-btn' className='border-2 rounded-xl bg-blue-700 text-white hover:bg-blue-900 w-48 h-12 font-bold ease-in-out duration-300' onClick={handleDonateClick}>DONATE NOW</button>
          </div>
          <div id='s-p3-right' className='pro-img w-1/2'>
            <img className='w-full rounded-br-3xl rounded-tl-3xl' alt='ProgramSectionImage' src={program_3}/>
          </div>

        </div>

      </section>
    </>
  )
}

export default Program
