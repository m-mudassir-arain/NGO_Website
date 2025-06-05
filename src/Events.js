import React from 'react'
import event_1 from './assets/event-1.jpg'
import event_2 from './assets/event-2.jpg'
import event_3 from './assets/event-3.jpg'
import event_4 from './assets/event-4.jpg'

function Events() {
  return (
    <>
      <section id='Events' className='flex justify-center items-center h-screen'>
        <div id='event-section' className='flex flex-col justify-center items-center w-3/5 h-3/5 p-8'>
          <h1 id='event-heading' className='text-6xl font-bold text-center text-white mb-8'>Empowering Change Together</h1>
          <p className='text-xl text-white w-4/5'>Join us in our mission to make a difference. Explore our upcoming events and find out how you can get involved!</p>
        </div>
      </section>
      {/* -----------------------sub-events------------------------ */}
      <section id='sub-events' className='h-full flex justify-center items-center'>
        <div id='sub-events-section' className='flex flex-wrap justify-center items-center p-10'>

          {/* -------event-1 */}
          <div id='event-1' className='sub-event flex flex-col justify-center items-center w-1/3 overflow-hidden m-8'>
            <div id='event-image'>
              <img src={event_1} alt='EventsImage'/>
            </div>
            <div id='event-details' className='p-8'>
              <h1 className='text-4xl font-semibold mb-3'>Health & Wellness Camp</h1>
              <p className='text-lg mb-3'><span className='font-semibold'> Date: </span> September 28, 2024</p>
              <p className='text-lg mb-3'><span className='font-semibold'>  Location: </span> Community Center, Green Valley</p>
              <p className='text-lg mb-3'><span className='font-semibold'>  Description: </span>
                  Join us for a free health and wellness camp offering basic medical checkups, vaccinations, and consultations with healthcare professionals. 
                  This camp aims to provide essential healthcare services to underprivileged individuals and raise awareness about health issues. Volunteers 
                  are welcome!
              </p>
            </div>
          </div>
          {/* ---------event-2 */}
          <div id='event-2' className='sub-event flex flex-col justify-center items-center w-1/3 overflow-hidden m-8'>
            <div id='event-image'>
              <img src={event_2} alt='EventsImage'/>
            </div>
            <div id='event-details' className='p-8'>
              <h1 className='text-4xl font-semibold mb-3'>Educational Workshop for Youth</h1>
              <p className='text-lg mb-3'><span className='font-semibold'> Date: </span> October 15, 2024</p>
              <p className='text-lg mb-3'><span className='font-semibold'>  Location: </span> Hope Foundation, Downtown</p>
              <p className='text-lg mb-3'><span className='font-semibold'>  Description: </span>
                  A day-long interactive workshop for underprivileged youth focusing on digital literacy, career guidance, and personal development. Industry experts 
                  and volunteers will share insights and mentor the participants to equip them with skills for a brighter future.
              </p>
            </div>
          </div>
          {/* ---------event-3 */}
          <div id='event-1' className='sub-event flex flex-col justify-center items-center w-1/3 overflow-hidden m-8'>
            <div id='event-image'>
              <img src={event_3} alt='EventsImage'/>
            </div>
            <div id='event-details' className='p-8'>
              <h1 className='text-4xl font-semibold mb-3'>Food Distribution Drive</h1>
              <p className='text-lg mb-3'><span className='font-semibold'> Date: </span> November 3, 2024</p>
              <p className='text-lg mb-3'><span className='font-semibold'>  Location: </span> Sunshine Shelter, Hill Street</p>
              <p className='text-lg mb-3'><span className='font-semibold'>  Description: </span>
                  Help us combat hunger by participating in our food distribution drive. Volunteers will assist in packing and distributing nutritious meals to homeless 
                  and low-income families. Every meal makes a difference!
              </p>
            </div>
          </div>
          {/* ---------event-4 */}
          <div id='event-4' className='sub-event flex flex-col justify-center items-center w-1/3 overflow-hidden rounded-tl-3xl rounded-br-3xl m-8'>
            <div id='event-image'>
              <img src={event_4} alt='EventsImage'/>
            </div>
            <div id='event-details' className='p-8'>
              <h1 className='text-4xl font-semibold mb-3'>Tree Plantation Drive</h1>
              <p className='text-lg mb-3'><span className='font-semibold'> Date: </span> December 12, 2024</p>
              <p className='text-lg mb-3'><span className='font-semibold'>  Location: </span> Riverside Park</p>
              <p className='text-lg mb-3'><span className='font-semibold'>  Description: </span>
                  Contribute to a greener tomorrow! Join us for a tree plantation drive where volunteers will plant trees and educate local communities on the importance of 
                  environmental conservation. Let’s make our planet healthier together.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Events
