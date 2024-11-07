import { Route, Routes } from 'react-router-dom';
import Home1 from './Components/Home1';
import Home2 from './Components/Home2';
import Navbar from './Components/Navbar';
import AnimationPart from './Components/AnimationPart';
import BigSection from './Components/BigSection';
import Toke from './Components/Toke';
import { useEffect } from 'react';
import AOS from 'aos';
import Main from './Components/main';
import Home3 from './Components/Home3';
import MySwiper from './Components/ModalCarousel';
import { Soon } from './Components/Soon';

function App() {
   useEffect(() => {
      AOS.init({ duration: 900 }); // Animatsiya davomiyligi (ms)
   }, []);
   return (
      <Routes>
         <Route path='/' element={<Main />} />
         <Route path='/develop' element={<Soon />}></Route>
         <Route path='/meme' element={<Home3 />} />
         <Route path='/carousel/:id' element={<MySwiper />} />
      </Routes>
   );
}

export default App;
