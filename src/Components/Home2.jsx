import { Link } from 'react-router-dom';
import cai from '../assets/images/Cai_6.png';

function Home2() {
   return (
      <div className='w-full min-h-[70vh] md:h-[100vh] flex'>
         <div className='bg-img1 w-full h-full'>
            <div className='container mx-auto w-full h-full bg-img2 flex md:flex-row flex-col justify-center items-center p-[50px]'>
               <div className='md:hidden mb-5 flex flex-col justify-center items-center'>
                  <img
                     className='w-[150px] md:w-[226px] h-auto md:h-[145px] mt-[100px]'
                     src='https://static.wixstatic.com/media/7f442f_aa3b85de4c08404380806583c38721cf~mv2.png/v1/fill/w_454,h_290,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2080_2x.png'
                     alt=''
                  />
                  <img
                     className='md:w-[529px] h-auto md:h-[126px] mt-[-20px] md:mt-[-50px]'
                     src='https://static.wixstatic.com/media/7f442f_6a240ed0f54b4e25a4b419139b7f6e3b~mv2.png/v1/fill/w_1058,h_254,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2079_2x.png'
                     alt=''
                  />
               </div>
               <div className='w-full flex justify-between md:justify-center items-center gap-[20px] md:mt-[0] mt-[-40px]'>
                  <img
                     className='w-[50%] h-auto xl:w-[596px] xl:h-[596px]'
                     src='https://static.wixstatic.com/media/7f442f_519321a427c84f99862a9a8f05c4e756~mv2.png/v1/fill/w_1194,h_1194,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Asset%2087_2x.png'
                     alt=''
                  />
                  <div className='flex flex-col items-center gap-[8px] md:gap-[20px]'>
                     <img
                        className='md:w-[185px] w-[70%] h-auto xl:h-[185px]'
                        src='https://static.wixstatic.com/media/7f442f_49b47971379c435da132e5ed7c680e29~mv2.png/v1/fill/w_372,h_372,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2086_2x.png'
                        alt=''
                     />
                     <img
                        className='md:w-[185px] w-[70%] h-auto xl:h-[185px]'
                        src='https://static.wixstatic.com/media/7f442f_b9676df7d67f4c3bb9df630d5ef8edb2~mv2.png/v1/fill/w_372,h_372,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2085_2x.png'
                        alt=''
                     />
                     <img
                        className='md:w-[185px] w-[70%] h-auto xl:h-[185px] mt-[]'
                        src='https://static.wixstatic.com/media/7f442f_fb8f9c855801460d8c3df95dad8b9675~mv2.png/v1/fill/w_372,h_372,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2084_2x.png'
                        alt=''
                     />
                  </div>
                  <div className='w-[0%] md:w-[530px] flex flex-col justify-center items-center'>
                     <div className='md:block hidden'>
                        <img
                           className='w-[226px] h-[145px]'
                           src={cai}
                           // src="https://static.wixstatic.com/media/7f442f_aa3b85de4c08404380806583c38721cf~mv2.png/v1/fill/w_454,h_290,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2080_2x.png"
                           alt=''
                        />
                        <img
                           className='w-[529px] h-[126px] mt-[-50px]'
                           src='https://static.wixstatic.com/media/7f442f_6a240ed0f54b4e25a4b419139b7f6e3b~mv2.png/v1/fill/w_1058,h_254,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2079_2x.png'
                           alt=''
                        />
                     </div>
                     <img
                        className='img w-[388px] h-[309px] mt-[-30px]'
                        src='https://static.wixstatic.com/media/7f442f_274eff8e04524b7dab3c98c2bd82af20~mv2.png/v1/fill/w_778,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Asset%2083_2x.png'
                        alt=''
                     />
                     <Link to={'/memo'} className='md:block hidden'>
                        <img
                           className='w-[283px] h-[93px] hover:scale-105'
                           src='https://static.wixstatic.com/media/7f442f_15ff181905834a878fe0ce5ecdb98096~mv2.png/v1/fill/w_568,h_186,al_c,lg_1,q_85,enc_auto/Asset%2082_2x.png'
                           alt=''
                        />
                     </Link>
                  </div>
               </div>

               <Link to={'/memo'} className='w-full md:hidden block mb-[120px]'>
                  <img
                     className='w-[283px] h-[93px]'
                     src='https://static.wixstatic.com/media/7f442f_15ff181905834a878fe0ce5ecdb98096~mv2.png/v1/fill/w_568,h_186,al_c,lg_1,q_85,enc_auto/Asset%2082_2x.png'
                     alt=''
                  />
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Home2;
