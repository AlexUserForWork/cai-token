import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import Main from "./Components/main";
import Home3 from "./Components/Home3";
import MySwiper from "./Components/ModalCarousel";

function App() {
    useEffect(() => {
        AOS.init({ duration: 900 }); // Animatsiya davomiyligi (ms)
    }, []);
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/memo" element={<Home3 />} />
            <Route path="/carousel/:id" element={<MySwiper />} />
        </Routes>
    );
}

export default App;
