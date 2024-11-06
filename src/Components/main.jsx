import React, { useState, useEffect } from 'react';
import Home1 from './Home1';
import Home2 from './Home2';
import Navbar from './Navbar';
import AnimationPart from './AnimationPart';
import BigSection from './BigSection';
import Toke from './Toke';
import Footer from './Footer';
import { Link as ScrollLink } from 'react-scroll';
import Carousel from './Carousel';
import FirstPart from './FirstPart';
import Title1 from '../assets/images/Asset 39_2x.png';
import Title2 from '../assets/images/Asset 40_2x.png';
import Title3 from '../assets/images/Asset 41_2x.png';
import Title4 from '../assets/images/Asset 105_2x.png';
import Title5 from '../assets/images/Asset 106_2x.png';
import Titles from './Titles';
import { Link, useLocation } from 'react-router-dom';

const Main = () => {
   const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
   const url = useLocation();
   const [currentUrl, setCurrentUrl] = useState(url.pathname);

   const [showHeader, setShowHeader] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY;
         console.log('currentScrollY', currentScrollY);
         if (currentScrollY < 40) {
            setShowHeader(true);
         } else if (currentScrollY < lastScrollY) {
            setShowHeader(true);
         } else {
            setShowHeader(false);
         }

         setLastScrollY(currentScrollY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, [lastScrollY]);

   return (
      <div className='relative'>
         {/* Desktop Navbar */}
         <div
            className={`w-full hidden md:block h-[100px] fixed z-[999] ${
               showHeader ? 'opacity-100 bg-transparent' : 'opacity-0'
            } transition-all duration-500`}
         >
            <div
               className={`container flex h-full font-groboldov ${
                  showHeader ? 'opacity-100 bg-transparent' : 'opacity-0'
               } transition-all duration-500`}
            >
               <div className='w-full h-full flex justify-end'>
                  <ul className='w-full h-full flex justify-end gap-6 items-center text-[20px] pr-4'>
                     <ScrollLink
                        to={'home'}
                        smooth={true}
                        duration={500}
                        className={` ${
                           currentUrl === '/' || currentUrl === '/develop'
                              ? 'border-[3px] rounded-[22px] border-black px-5 py-[3px] text-white bg-[#d36b0abe]'
                              : 'text-[#3A170D]'
                        } cursor-pointer font-bold hover:text-green-400`}
                     >
                        Home
                     </ScrollLink>
                     <ScrollLink
                        to='about'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer font-bold text-[#3A170D] px-5 hover:text-green-400'
                     >
                        About
                     </ScrollLink>
                     <ScrollLink
                        to='how-to-buy'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer font-bold text-[#3A170D] px-5 hover:text-green-400'
                     >
                        How to buy
                     </ScrollLink>
                     <ScrollLink
                        to='token'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer font-bold text-[#3A170D] px-5 hover:text-green-400'
                     >
                        Token
                     </ScrollLink>
                     <Link
                        to={'/memo'}
                        smooth={true}
                        duration={500}
                        className='cursor-pointer font-bold text-[#3A170D] px-5 hover:text-green-400'
                     >
                        Memo
                     </Link>
                  </ul>
               </div>
            </div>
         </div>

         {/* Mobile Navbar */}
         <div className='w-full md:hidden fixed top-0 left-0 z-[999] bg-transparent'>
            <div
               className={`w-full h-[60px] ${
                  scroll ? 'custom-background' : 'bg-transparent'
               } flex justify-end items-center px-10`}
            >
               <button
                  onClick={() => setMenuOpen(true)}
                  className='text-[30px] font-bold text-[#3A170D]'
               >
                  ☰
               </button>
            </div>

            {menuOpen && (
               <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-[1000] flex items-center justify-center'>
                  <div className='w-full h-full back-footer flex flex-col items-center p-5'>
                     <button
                        onClick={() => setMenuOpen(false)}
                        className='self-end text-[30px] text-[#3A170D] font-bold mb-5 px-5'
                     >
                        × {/* Close icon */}
                     </button>
                     <ul className='flex flex-col text-[30px] font-groboldov  font-bold'>
                        <li className='text-white px-4 py-2'>
                           <ScrollLink
                              to='home'
                              smooth={true}
                              duration={500}
                              onClick={() => setMenuOpen(false)}
                              className='cursor-pointer'
                           >
                              Home
                           </ScrollLink>
                        </li>
                        <li className='text-white px-4 py-2'>
                           <ScrollLink
                              to='about'
                              smooth={true}
                              duration={500}
                              onClick={() => setMenuOpen(false)}
                              className='cursor-pointer'
                           >
                              About
                           </ScrollLink>
                        </li>
                        <li className='text-white px-4 py-2'>
                           <ScrollLink
                              to='how-to-buy'
                              smooth={true}
                              duration={500}
                              onClick={() => setMenuOpen(false)}
                              className='cursor-pointer'
                           >
                              How to buy
                           </ScrollLink>
                        </li>
                        <li className='text-white px-4 py-2'>
                           <ScrollLink
                              to='token'
                              smooth={true}
                              duration={500}
                              onClick={() => setMenuOpen(false)}
                              className='cursor-pointer'
                           >
                              Token
                           </ScrollLink>
                        </li>
                        <li className='text-white px-4 py-2'>
                           <Link
                              to='/memo'
                              onClick={() => setMenuOpen(false)}
                              className='text-white cursor-pointer'
                           >
                              Memo
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            )}
         </div>

         {/* Sections */}
         <div>
            <Home1 />
         </div>
         <div>
            <AnimationPart />
         </div>
         <div>
            <div className='big-section w-full  pt-10 flex flex-col'>
               <div id='about' className='mb-10'>
                  <FirstPart />
               </div>
               <div className='mt-10 mb-10'>
                  <div
                     data-aos='zoom-in'
                     className='w-full justify-center items-center hidden lg:flex'
                  >
                     <img src={Title1} className='w-[70px]' alt='' />
                     <img src={Title3} className='h-[130px]' alt='' />
                     <img src={Title2} className='w-[70px]' alt='' />
                  </div>
                  <div
                     data-aos='zoom-in'
                     className='w-full justify-center items-center flex lg:hidden'
                  >
                     <img src={Title1} className='w-[40px]' alt='' />
                     <img src={Title5} className='h-[60px]' alt='' />
                     <img src={Title2} className='w-[40px]' alt='' />
                  </div>
                  <div
                     data-aos='zoom-in'
                     className='flex lg:hidden justify-center'
                  >
                     <img src={Title4} className='h-[70px]' alt='' />
                  </div>
                  <Carousel />
               </div>
               <div id='how-to-buy'>
                  <Titles />
               </div>
            </div>
         </div>
         <div id='token'>
            <Toke />
         </div>
         <Home2 />
         <Footer />
      </div>
   );
};

export default Main;
