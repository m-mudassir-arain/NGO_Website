import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'
import homeImage from './assets/home.png'
import h_a_m_image from './assets/h-about-first.jpg'
import h_a_v_image from './assets/h-about-second.jpeg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import h_donation_image from './assets/h-donation.jpg'

function Home() {
  const navigate = useNavigate(); // Hook for navigation

  const handleDonateClick = () => {
    navigate('/Donate'); // Navigate to the Donate page
  };
  const handleLearnMoreClick = () => {
    navigate('/About'); // Navigate to the About page
  };
  const handleContactClick = () => {
    navigate('/Contact'); // Navigate to the About page
  };
  return (
    <>
      <section id='Home' className='flex flex-col justify-end items-center'>

        <div id='home-section' className='flex justify-center items-center'>

          <div id='home-left'className='flex flex-col justify-center items-start w-full h-full'>
            <h1 id='h-l-heading' className='font-bold text-7xl mb-8 leading-snug'>We Will <span className='text-blue-700'> Rebuild </span> Our Future Together</h1>
            <p id='h-l-para' className='text-xl text-gray-600 mb-8'>Donority exists to create a secure future for upcoming generations.</p>
            <button id='home-btn' className='border-2 rounded bg-blue-700 text-white hover:bg-blue-900 w-48 h-12 font-bold ease-in-out duration-300' onClick={handleDonateClick}>DONATE NOW</button>
          </div>
          <div id='home-right' className='flex justify-center items-center w-full h-full'>            
            <img id='h-r-image' alt='HomeSectionImage' className='w-3/4 h-full' src={homeImage}/>
          </div>

        </div>
        <div id='home-categories' className='flex justify-center items-center w-full'>

          <div id='cate1' className='cate bg-teal-600 w-1/3 h-96 flex flex-col justify-evenly items-start p-10'>
            <h1 className='text-5xl font-bold text-white'>Education Projects in World</h1>
            <button className='text-white border-2 rounded w-40 h-9 hover:bg-white hover:text-teal-700 ease-in-out duration-300' onClick={handleDonateClick}>DONATE NOW</button>
          </div>
          <div id='cate2' className='cate bg-yellow-600 w-1/3 h-96 flex flex-col justify-evenly items-start p-10'>
            <h1 className='text-5xl font-bold text-white'>Health Access for Refugees</h1>
            <button className='text-white border-2 rounded w-40 h-9 hover:bg-white hover:text-yellow-700 ease-in-out duration-300' onClick={handleDonateClick}>DONATE NOW</button>
          </div>
          <div id='cate3' className='cate bg-red-500 w-1/3 h-96 flex flex-col justify-evenly items-start p-10'>
            <h1 className='text-5xl font-bold text-white'>Food Assistance for Refugees</h1>
            <button className='text-white border-2 rounded w-40 h-9 hover:bg-white hover:text-red-700 ease-in-out duration-300' onClick={handleDonateClick}>DONATE NOW</button>
          </div>

        </div>

      </section>
{/* -------------------Home-About-section----------------------- */}
      <section id='h-about' className='flex flex-col justify-evenly items-center h-screen'>

        <div id='h-about-mission' className='flex justify-center items-center w-3/5'>

          <div id='h-a-m-left' className='flex flex-col justify-center items-start w-3/5'>
            <p className='text-blue-700 mb-10'>About Us</p>
            <h1 id='h-about-heading' className='text-6xl font-bold mb-8'>Our Mission</h1>
            <p id='h-about-para' className='text-gray-500 text-xl w-3/4 mb-7'>We aim to uplift disadvantaged communities by providing access to education, 
              healthcare, and sustainable resources, promoting equality, self-reliance, and lasting positive change.
            </p>
            <button id='h-about-btn' className='border-2 rounded-xl bg-blue-700 text-white hover:bg-blue-900 w-48 h-12 font-bold ease-in-out duration-300' onClick={handleLearnMoreClick}>LEARN MORE</button>
          </div>
          <div id='h-a-m-right' className='flex justify-center items-center w-1/2'>
            <img className='w-full rounded-3xl' alt='HomeSectionImage' src={h_a_m_image}/>
          </div>

        </div>
        <div id='h-about-vision' className='flex justify-center items-center w-3/5'>

          <div id='h-a-v-left' className='w-1/2'>
            <img className='w-full rounded-3xl' alt='HomeSectionImage' src={h_a_v_image} />
          </div>
          <div id='h-a-v-right' className='flex flex-col justify-center items-start w-3/5 pl-32'>
            <p className='text-blue-700 mb-10'>What We Do</p>
            <h1 id='h-about-heading' className='text-6xl font-bold mb-8'>Our Vision</h1>
            <p id='h-about-para' className='text-gray-500 text-xl mb-7'>Our vision is a world where every individual, regardless of background, has 
              equal opportunities to thrive, empowered by education, healthcare, and sustainable resources.
            </p>
            <button id='h-about-btn' className='border-2 rounded-xl bg-blue-700 text-white hover:bg-blue-900 w-48 h-12 font-bold ease-in-out duration-300' onClick={handleLearnMoreClick}>LEARN MORE</button>
          </div>

        </div>

      </section>
{/* ---------------------Home-Program-section---------------------------- */}
      <section id='h-program'className='h-screen flex justify-center items-center'>
        <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{clickable: true,}} navigation={true} modules={[Pagination, Navigation]} className="mySwiper h-4/5 w-4/5">

          <SwiperSlide>
            <div id='program-1' className='program flex flex-col justify-end items-start p-10'>
              <h1 className='text-6xl font-bold text-white bg-blue-600 w-full h-20 flex justify-start items-center mb-5 p-3'>Helping the Homeless During the Holydays</h1>
              <button id='h-program-btn' className='border-2 rounded bg-blue-700 text-white hover:bg-blue-900 w-48 h-12 font-bold ease-in-out duration-300' onClick={handleDonateClick}>DONATE NOW</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id='program-2' className='program flex flex-col justify-end items-start p-10'>
              <h1 className='text-6xl font-bold text-white bg-blue-600 w-full h-20 flex justify-start items-center mb-5 p-3'>Providing Healthcare Services</h1>
              <button id='h-program-btn' className='border-2 rounded bg-blue-700 text-white hover:bg-blue-900 w-48 h-12 font-bold ease-in-out duration-300' onClick={handleDonateClick}>DONATE NOW</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id='program-3' className='program flex flex-col justify-end items-start p-10'>
              <h1 className='text-6xl font-bold text-white bg-blue-600 w-full h-20 flex justify-start items-center mb-5 p-3'>Primary Education for Indigenous Children</h1>
              <button id='h-program-btn' className='border-2 rounded bg-blue-700 text-white hover:bg-blue-900 w-48 h-12 font-bold ease-in-out duration-300' onClick={handleDonateClick}>DONATE NOW</button>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </section>

      {/* ---------------Home-Donation-section--------------------------- */}
      <section id='h-donation' className='h-3/4 w-full flex justify-center items-center bg-gray-500/20 p-10'>
        <div id='h-donate-image' className='w-1/2 flex justify-end items-center'>
          <img className='w-3/5 rounded' alt='HomeSectionImage' src={h_donation_image}/>
        </div>
        <div id='h-donate' className='h-4/5 w-1/2 flex flex-col justify-center items-start p-10 '>
          <p className='text-blue-800 mb-10 text-xl'>Donation</p>
          <h1 className='text-2xl mb-8 w-3/5'>Your donation helps us provide vital resources like education, healthcare, and sustainable development to those in need. Together, we can make a lasting impact and transform lives.</h1>
          <button id='h-donation-btn' className='border-2 rounded bg-blue-700 text-white hover:bg-blue-900 w-48 h-12 font-bold ease-in-out duration-300' onClick={handleDonateClick}>DONATE NOW</button>
        </div>
      </section>
      {/* ---------------Home-Contact-section----------------------------- */}
      <section id='h-contact' className='h-screen flex justify-center items-center'>
        <div id='h-contact-us' className=' flex flex-col jsutify-center items-center'>
          <h3 className='text-4xl font-bold text-white mb-3'>Have Questions ?</h3>
          <h1 className='text-6xl font-bold text-blue-800 mb-12'>Get In Touch With Us</h1>
          <button id='h-contact-btn' className='border-2 rounded bg-blue-700 text-white hover:bg-blue-900 w-48 h-12 font-bold ease-in-out duration-300' onClick={handleContactClick}>CONTACT NOW</button>
        </div>
      </section>
    </>
  );
};

export default Home;
