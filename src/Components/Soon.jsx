import cai from '../assets/images/Asset 89_2x.png';
export const Soon = () => {
   return (
      <div className='bg-img w-full h-screen'>
         <div className='w-full h-screen flex flex-col items-center justify-center gap-4'>
            <img src={cai} />
            <div className=' text-[48px] font-comic flex items-center justify-center text-center border-[3px] rounded-[22px] border-black px-14 py-2 text-white bg-[#d36b0abe]'>
               SOON
            </div>
         </div>
      </div>
   );
};
