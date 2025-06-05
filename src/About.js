import React from 'react'
import a_s_m_image from './assets/h-about-first.jpg'
import a_s_v_image from './assets/h-about-second.jpeg'

function About() {
  return (
    <>
      <section id='About' className='flex justify-center items-center h-screen'>

        <div id='about-section' className='flex flex-col justify-center items-center w-3/5 h-3/5 p-8'>

          <h1 id='about-heading' className='text-6xl font-bold text-white mb-8'>We assist those in need.</h1>
          <p className='text-white text-xl w-3/5'>
            Our non-profit organization uses sustainable development, healthcare, and education to uplift impoverished areas. By tackling the underlying causes of poverty 
            and inequality, we hope to have a lasting effect and build a better future.
          </p>

        </div>

      </section>
{/* ---------------About-second-section */}
      <section id='a-second-section' className='flex flex-col justify-evenly items-center h-screen'>

        <div id='a-s-mission' className='flex justify-center items-center w-3/5'>

          <div id='a-s-m-left' className='flex flex-col justify-center items-start w-3/5'>
            <p className='text-blue-700 mb-10'>About Us</p>
            <h1 id='a-s-heading' className='text-6xl font-bold mb-8'>Our Mission</h1>
            <p id='a-s-para' className='text-gray-500 text-xl w-3/4 mb-7'>We aim to uplift disadvantaged communities by providing access to education, 
              healthcare, and sustainable resources, promoting equality, self-reliance, and lasting positive change.
            </p>
          </div>
          <div id='a-s-m-right' className='flex justify-center items-center w-1/2'>
            <img className='w-full rounded-3xl' alt='AboutSectionImage' src={a_s_m_image}/>
          </div>

        </div>
        <div id='a-s-vision' className='flex justify-center items-center w-3/5'>

          <div id='a-s-v-left' className='w-1/2'>
            <img className='w-full rounded-3xl' alt='AboutSectionImage' src={a_s_v_image} />
          </div>
          <div id='a-s-v-right' className='flex flex-col justify-center items-start w-3/5 pl-32'>
            <p className='text-blue-700 mb-10'>What We Do</p>
            <h1 id='a-s-heading' className='text-6xl font-bold mb-8'>Our Vision</h1>
            <p id='a-s-para' className='text-gray-500 text-xl mb-7'>Our vision is a world where every individual, regardless of background, has 
              equal opportunities to thrive, empowered by education, healthcare, and sustainable resources.
            </p>
          </div>

        </div>

      </section>
    </>
  )
}

export default About
