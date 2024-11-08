

import React from 'react';
import { ReactTyped } from 'react-typed';
import { useNavigate} from 'react-router-dom';


const Banner = () => {

  const navigate = useNavigate();

  // OnClick handler for the button
  const handleGetStarted = () => {
    navigate('/admission-form');
  };

  return (
    // https://t.ly/phRGB
    <div className="bg-[url('https://t.ly/phRGB')] bg-center opacity w-full py-20">
        <div className='max-w-7xl my-24 mx-auto  text-center font-bold '>
        <div className='text-white  text-xl md:text-3xl md:p-6 '>
            We Dont Teach You
        </div>
        <h2 className='text-white blur-none text-2xl md:text-7xl md:p-6'>
          We Help You Learn 
        </h2> 
        <div className=' text-xl md:text-5xl text-white md:p-6'>
            
            <ReactTyped className='p-3'
            strings={['Pure English','Sure English','Any Board','Any Class']}
            typeSpeed={100}
            backSpeed={100}
            loop
            />
        </div>
        <button className='bg-black text-white p-3 rounded'
          onClick={handleGetStarted}
        >Get Started</button>

        </div>
    </div>
  )
}

export default Banner ;
