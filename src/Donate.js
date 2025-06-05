import React, { useState } from 'react';
import './App.css';
import donation_banner from './assets/donate-form.png'

const Donate = () => {
  const [amount, setAmount] = useState(10); // Default selected amount
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('test');

  const handleAmountClick = (value) => {
    setCustomAmount(''); // Clear custom amount if preset is selected
    setAmount(value);
  };

  const handleCustomAmountChange = (e) => {
    setAmount(''); // Clear preset amount if custom amount is selected
    setCustomAmount(e.target.value);
  };

  return (
    <>
      <section id='Donate' className='h-screen flex flex-col justify-center items-center'>
        <div id='donate-section' className='flex flex-col justify-center items-center w-3/5 h-3/5 p-8'>

          <h1 id='program-heading' className='text-6xl font-bold text-white mb-8'>Let's Gather Donations for the In Need</h1>
          <p className='text-white text-xl w-4/5'>
            Your donation helps us provide vital resources like education, healthcare, and sustainable development to those in need. 
            Together, we can make a lasting impact and transform lives.
          </p>

        </div>
        
      </section>
    
      <section id='d-banner-form' className='flex justify-center items-center h-screen'>
          <div id='d-b-f-section' className='flex justify-center items-center'>
            <div id='donation-banner' className='max-w-xl h-4/5'>
              <img className='' alt='DonateSectionImage' src={donation_banner}/>
            </div>
            <div className="donation-form-container max-w-xl p-6 bg-white rounded shadow">
              <h2 className="text-2xl font-semibold mb-4">Choose An Amount</h2>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Notice:</strong> Test mode is enabled. While in test mode no live donations are processed.
              </p>

              <div className="mb-4">
                <input type="number" value={customAmount || amount} onChange={handleCustomAmountChange} placeholder="Enter custom amount" className="w-full p-2 border border-gray-300 rounded mb-2"/>
              </div>

              <div className="flex flex-wrap justify-between mb-4">
                {[10, 25, 50, 100, 250].map((value) => (
                  <button key={value} className={`py-2 px-4 rounded border flex-1 mx-1 mb-2 ${amount === value ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => handleAmountClick(value)}>${value}</button>
                ))}
                <button className={`py-2 px-4 rounded border flex-1 mx-1 mb-2 ${customAmount ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => handleAmountClick(customAmount)}>Custom Amount</button>
              </div>

              <div className="mb-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Confirm your donation amount</span>
                </label>
              </div>

              <div className="mb-4">
                <h3 className="text-xl mb-2">Select Payment Method</h3>
                <label className="flex items-center space-x-2 mb-2">
                  <input type="radio" name="paymentMethod" checked={paymentMethod === 'test'} onChange={() => setPaymentMethod('test')}/>
                  <span>Test Donation</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="paymentMethod" checked={paymentMethod === 'offline'} onChange={() => setPaymentMethod('offline')}/>
                  <span>Offline Donation</span>
                </label>
              </div>

              <div className="mb-4">
                <h3 className="text-xl mb-2">Personal Info</h3>
                <div className="flex flex-wrap gap-4 mb-2">
                  <input type="text" placeholder="First Name" className="flex-1 p-2 border border-gray-300 rounded" />
                  <input type="text" placeholder="Last Name" className="flex-1 p-2 border border-gray-300 rounded" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded" />
              </div>

              <div className="mb-4 text-lg font-semibold">
                Donation Total: <span className="text-blue-700">${customAmount || amount}</span>
              </div>

              <button className="w-full py-2 bg-blue-700 text-white rounded hover:bg-blue-900">Donate Now</button>
            </div>
          </div>
      </section>
    </>
  );
};

export default Donate;
