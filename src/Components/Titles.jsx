import React, { useEffect, useState } from 'react';
import Title1 from '../assets/images/Asset 60_2x.png';
import Title2 from '../assets/images/Asset 58_2x.png';
import Title3 from '../assets/images/Asset 59_2x.png';
import Background from '../assets/images/Asset 38_2x.png';
import Cat1 from '../assets/images/Asset 62_2x.png';
import Cat2 from '../assets/images/Asset 61_2x.png';

const Titles = () => {
   const [shake, setShake] = useState(true);

   useEffect(() => {
      const interval = setInterval(() => {
         setShake(true);
         setTimeout(() => setShake(false), 600); // Duration of the shake animation
      }, 2000); // Shake every 2 seconds

      return () => clearInterval(interval); // Cleanup on unmount
   }, []);

   return (
      <div className='w-full min-h-[100vh] font-groboldov '>
         <div className='container mx-auto'>
            <div
               data-aos='zoom-in'
               className='w-full flex justify-center relative'
            >
               <img
                  src={Title3}
                  className='h-[50px] md:h-[100px] mt-5 md:mt-10'
                  alt=''
               />
               <img src={Title1} className='h-[100px] md:h-[200px]' alt='' />
               <img
                  src={Title2}
                  className='h-[50px] md:h-[100px] mt-5 md:mt-10'
                  alt=''
               />
            </div>
            <div className='w-full flex flex-col lg:flex-row'>
               <div className='py-5 lg:w-1/2 '>
                  <div className='w-full backtitle1 min-h-[200px] flex flex-col justify-center items-start lg:py-5 px-10 md:px-20'>
                     <p className='text-[20px] md:text-[28px] font-bold text-[#299452]'>
                        SET UP YOUR WALLET
                     </p>
                     <p className='text-[14px] md:text-[20px] font-comic'>
                        Download Phantom or your preferred wallet from the App
                        Store or Google Play Store for free. Desktop users can
                        download the Google Chrome extension by visiting
                        phantom.app.
                     </p>
                  </div>
               </div>
               <div
                  className={`flex lg:w-1/2 items-end justify-end ${
                     shake ? 'shake' : ''
                  } pt-2 lg:pt-10 mb-[-30px] z-10`}
               >
                  <img src={Cat1} className='w-3/4 lg:w-1/2' alt='' />
               </div>
            </div>
            <div className='w-full flex  justify-end'>
               <div className='w-full lg:w-1/2'>
                  <div className='w-full backtitle1 min-h-[200px] flex flex-col justify-center items-start lg:py-10 px-10 md:px-20'>
                     <p className='text-[20px] md:text-[28px] font-bold text-[#299452]'>
                        SET UP YOUR WALLET
                     </p>
                     <p className='text-[14px] md:text-[20px] font-comic'>
                        Connect to Raydium. Go to raydium.io in Google Chrome or
                        use the browser within your Phantom app. Connect your
                        wallet. Paste the $CAI token address into Raydium,
                        select $CAI COIN, and confirm. When Phantom prompts you
                        for a wallet signature, sign it.
                     </p>
                  </div>
               </div>
            </div>
            <div className='w-full flex flex-col lg:flex-row'>
               <div
                  className={`hidden lg:flex  items-end justify-start ${
                     shake ? 'shake' : ''
                  } `}
               >
                  <img src={Cat2} className=' lg:h-[300px] ' alt='' />
               </div>
               <div className='py-5 lg:w-1/2'>
                  <div className='w-full backtitle1 min-h-[200px] flex flex-col justify-center items-start px-10 md:px-20'>
                     <p className='text-[20px] md:text-[28px] font-bold text-[#299452]'>
                        SET UP YOUR WALLET
                     </p>
                     <p className='text-[14px] md:text-[20px] font-comic'>
                        Download Phantom or your preferred wallet from the App
                        Store or Google Play Store for free. Desktop users can
                        download the Google Chrome extension by visiting
                        phantom.app.
                     </p>
                  </div>
               </div>
               <div className=''>
                  <div
                     className={`flex lg:hidden items-end justify-start ml-8 ${
                        shake ? 'shake' : ''
                     } `}
                  >
                     <img src={Cat2} className='w-1/2' alt='' />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Titles;
