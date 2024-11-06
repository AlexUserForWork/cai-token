import { useEffect, useState } from 'react';
import AOS from 'aos';
import Animation from '../assets/images/Animation.gif';
import catjson from '../assets/images/cat_mainF.json';
import cat from '../assets/images/Cai_1.png';
import Lottie from 'lottie-react';
import cai1 from '../assets/images/Comp 1_2.gif';

const options = {
   animationData: cat,
   loop: true
};

function Home1() {
   const [innerWidth, setInnerWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = () => setInnerWidth(window.innerWidth);

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
   }, []);

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;

         if (innerWidth >= 1600) {
            const scaleFactor = 1 + scrollY * 0.002;
            document.querySelector(
               '.bg-img'
            ).style.backgroundSize = `${Math.max(scaleFactor * 115, 100)}%`;
         } else {
            document.querySelector('.bg-img').style.backgroundSize = 'cover';
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, [innerWidth]);

   useEffect(() => {
      AOS.init({ duration: 900 }); // Animatsiya davomiyligi (ms)
   }, []);

   const [shake, setShake] = useState(true);

   useEffect(() => {
      const interval = setInterval(() => {
         setShake(true);
         setTimeout(() => setShake(false), 600);
      }, 4000); // Shake every 2 seconds

      return () => clearInterval(interval); // Cleanup on unmount
   }, []);

   return (
      <div id='home' className='w-full min-h-[100vh] flex flex-col'>
         <div className='w-full bg-img min-h-[100vh] flex justify-center items-center md:px-20'>
            <div className='container mx-auto lg:flex-row flex-col flex items-center justify-between'>
               <img
                  data-aos='flip-up'
                  className='md:w-1/2 md:h-[530px] w-[400px] h-[400px] object-contain'
                  src={cat}
                  //   src='https://static.wixstatic.com/media/7f442f_3d203b36a6e54d6fa2a1a4211a2b617a~mv2.png/v1/fill/w_1142,h_1060,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Asset%2022_2x.png'
                  alt=''
               />
               {/* <Lottie
                  className='md:w-1/2 md:h-[530px] w-full h-1/2 object-cover'
                  animationData={catjson}
                  loop={true}
               /> */}
               <img
                  className={`relative mt-0 lg:mt-24 md:w-1/2 w-full h-1/2 object-cover cai-shake `}
                  src={cai1}
                  alt=''
               />

               {/* <img
                  className='md:w-1/2 md:h-[530px] w-full h-1/2 object-cover'
                  src={Animation}
                  alt=''
               /> */}
               <div
                  data-aos='fade-left'
                  className='fixed top-[35%] right-[40px] flex-col gap-[10px] z-[999] hidden md:flex'
               >
                  <a href='https://x.com/CAISolana'>
                     <img
                        className='w-[72px] h-[72px] hover:scale-90 transition-transform duration-500 cursor-pointer'
                        src='https://static.wixstatic.com/media/7f442f_1985512a49c94f348b8c0083e3f21b1e~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2020_2x.png'
                        alt=''
                        onMouseOver={(e) =>
                           (e.currentTarget.src =
                              'https://static.wixstatic.com/media/7f442f_444e6a63a191464bba34538194930b5c~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2017_2x.png')
                        }
                        onMouseOut={(e) => {
                           e.currentTarget.style.transition = 'transform 0.5s'; // 0.5 soniyalik sekinlik qo'shamiz
                           e.currentTarget.src =
                              'https://static.wixstatic.com/media/7f442f_1985512a49c94f348b8c0083e3f21b1e~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2020_2x.png';
                        }}
                     />
                  </a>
                  <a href='https://t.me/caisolana'>
                     <img
                        className='w-[72px] h-[72px] hover:scale-90 transition-transform duration-500 cursor-pointer'
                        src='https://static.wixstatic.com/media/7f442f_93d9c59e46fd4ff0b51d8d805a160b5e~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2019_2x.png'
                        alt=''
                        onMouseOver={(e) =>
                           (e.currentTarget.src =
                              'https://static.wixstatic.com/media/7f442f_36ccbfec276f485f83f6e1886cad1357~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2016_2x.png')
                        }
                        onMouseOut={(e) => {
                           e.currentTarget.style.transition = 'transform 0.5s'; // 0.5 soniyalik sekinlik qo'shamiz
                           e.currentTarget.src =
                              'https://static.wixstatic.com/media/7f442f_93d9c59e46fd4ff0b51d8d805a160b5e~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2019_2x.png';
                        }}
                     />
                  </a>
                  <a href='https://www.dextools.io/app/en/solana/pair-explorer/yDMFk8krUQNwnTpXkg49Lh86vDQLQBKs1L56ahEpump'>
                     <img
                        className='w-[72px] h-[72px] hover:scale-90 transition-transform duration-500 cursor-pointer'
                        src='https://static.wixstatic.com/media/7f442f_b8d486202cd9423d8eaebabb3925f6c0~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2018_2x.png'
                        alt=''
                        onMouseOver={(e) =>
                           (e.currentTarget.src =
                              'https://static.wixstatic.com/media/7f442f_0889479a745a45a1b5e2048b3f2498c3~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2015_2x.png')
                        }
                        onMouseOut={(e) => {
                           e.currentTarget.style.transition = 'transform 0.5s'; // 0.5 soniyalik sekinlik qo'shamiz
                           e.currentTarget.src =
                              'https://static.wixstatic.com/media/7f442f_b8d486202cd9423d8eaebabb3925f6c0~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2018_2x.png';
                        }}
                     />
                  </a>
               </div>
            </div>
         </div>
         <div className='w-full min-h-[150px] md:h-[250px] bg-btn'>
            <div className='container px-0 xl:px-20 mx-auto h-full py-[0px] flex flex-col md:flex-nowrap flex-wrap items-center justify-center gap-[0px] font-groboldov'>
               <div className='container px-0 xl:px-20 mx-auto h-full py-10 lg:py-[0px] flex md:flex-nowrap flex-wrap items-center justify-center gap-[20px] overflow-hidden '>
                  {/* <button className="w-[200px] h-[80px] hover:scale-95 transition-transform duration-500 ease-in-out">
                        <a href="https://app.uniswap.org/swap?outputCurrency=0xb4d9f54cdf26b3971a5b75dc27e36401ff4a8cc0">
                            <img
                                className="w-full h-full duration-500"
                                src="https://static.wixstatic.com/media/7f442f_dfd5fa8660824e6bbdc2abdcd1be941a~mv2.png/v1/fill/w_458,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2027_2x.png"
                                alt=""
                            />
                        </a>
                    </button> */}
                  <button className='w-[200px] h-[80px] hover:scale-95 transition-transform duration-500 ease-in-out'>
                     <a href='https://www.dextools.io/app/en/solana/pair-explorer/yDMFk8krUQNwnTpXkg49Lh86vDQLQBKs1L56ahEpump'>
                        <img
                           className='w-full h-full duration-500'
                           src='https://static.wixstatic.com/media/7f442f_c76e4194f185461799612ffe652051a2~mv2.png/v1/fill/w_458,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2026_2x.png'
                           alt=''
                        />
                     </a>
                  </button>
                  <button className='w-[200px] h-[80px] hover:scale-95 transition-transform duration-500 ease-in-out'>
                     <a href='https://raydium.io/swap/?inputMint=sol&outputMint=yDMFk8krUQNwnTpXkg49Lh86vDQLQBKs1L56ahEpump'>
                        <img
                           className='w-full h-full duration-500'
                           src='https://static.wixstatic.com/media/7f442f_c9796cd57f104f7c8a77be3067847374~mv2.png/v1/fill/w_458,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2025_2x.png'
                           alt=''
                        />
                     </a>
                  </button>
                  <button className='w-[200px] h-[80px] hover:scale-95 transition-transform duration-500 ease-in-out'>
                     <img
                        className='w-full h-full duration-500'
                        src='https://static.wixstatic.com/media/7f442f_ee84f1fd3f334bd28d985ed6e7b96ec2~mv2.png/v1/fill/w_458,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2024_2x.png'
                        alt=''
                     />
                  </button>
                  <button className='w-[200px] h-[80px] hover:scale-95 transition-transform duration-500 ease-in-out'>
                     <img
                        className='w-full h-full duration-500'
                        src='https://static.wixstatic.com/media/7f442f_7d4d657e1a524b2b8519f1a4b0939706~mv2.png/v1/fill/w_458,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2023_2x.png'
                        alt=''
                     />
                  </button>
               </div>
               <div className='relative text-[24px] text-green-100 mb-8 hidden lg:block'>
                  <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg rounded-lg transform scale-105'></div>
                  <p className='relative z-10'>
                     Contract:{' '}
                     <span
                        className='cursor-pointer'
                        onClick={async () => {
                           try {
                              await navigator.clipboard.writeText(
                                 'yDMFk8krUQNwnTpXkg49Lh86vDQLQBKs1L56ahEpump'
                              );
                              console.log('Content copied to clipboard');
                           } catch (err) {
                              console.error('Failed to copy: ', err);
                           }
                        }}
                     >
                        yDMFk8krUQNwnTpXkg49Lh86vDQLQBKs1L56ahEpump
                     </span>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home1;
