import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ".././index.css";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { data } from "../data/data";

export default function MySwiper() {
    const location = useLocation();
    const navigate = useNavigate();

    const urlParams = new URLSearchParams(location.search);
    const idFromUrl = urlParams.get("id");
    const startIndex = data.findIndex(
        (_, index) => index === Number(idFromUrl)
    );

    return (
        <div className="relative">
            {/* Close button */}
            <button
                onClick={() => navigate(-1)}
                className="absolute top-4 right-4 md:top-8 md:right-8 text-[30px]  text-black rounded-full p-2 md:p-3 z-[999]  transition"
                aria-label="Close"
            >
                ✕
            </button>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                initialSlide={startIndex >= 0 ? startIndex : 0}
                className="mySwipersecond"
            >
                {data.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="md:py-[100px] md:px-[500px]"
                    >
                        <div className="h-full w-full flex justify-center items-center">
                            <img
                                src={item.img}
                                className="md:w-full md:h-full h-[300px] w-[300px] object-cover"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
