// import { Container } from 'postcss'
// import React from 'react'
// import hero from '../../assets/Images/hero.png'
// const Home = () => {
//     return (
//         <>
//         <div className='h-full w-full flex flex-col items-start px-4 py-8 md:px-16 mt-20 md:mt-30'>
//             <h1 className='font-bold text-2xl md:text-3xl text-center mt-20 mb-4 max-w-lg'>Anytime Anywhere Learn on your Suitable Schedule</h1>
//             <p className='max-w-lg'>Your future, your choice. Enjoy personalized learning experiences designed to help you achieve your goals and unlock your potential.</p>
//             <img src={hero} alt="no image" className='h-50 w-64'/>
//         </div>
//         </>

//     )
// }

// export default Home

import React from 'react';
import hero from '../../assets/Images/hero.png';

const Home = () => {
    return (
        <div className='h-full w-full flex flex-col md:flex-row items-center px-4 py-8 md:px-16 mt-20 md:mt-0'>
            <div className='flex-1 flex flex-col items-start ml-5 md:ml-15'>
                <h1 className='font-bold text-2xl md:text-3xl text-center md:text-left mt-2 mb-4 max-w-lg'>
                    Anytime Anywhere Learn on your Suitable Schedule
                </h1>
                <p className='max-w-lg'>
                    Your future, your choice. Enjoy personalized learning experiences designed to help you achieve your goals and unlock your potential.
                </p>
            </div>
            <img src={hero} alt="Hero" style={{marginLeft:'10rem'}} className='h-90 w-96'/>
        </div>
    );
}

export default Home;
