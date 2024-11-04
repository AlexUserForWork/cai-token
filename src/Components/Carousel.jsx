import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../index.css"; // Make sure this includes the new hover styling

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { data } from "../data/data";
import { Link } from "react-router-dom";

export default function Carousel() {
    return (
        <div className="relative mt-10">
            <div className="mx-auto">
                <Swiper
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={20000}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        456: {
                            slidesPerView: 1,
                        },
                        556: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        868: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index} className="">
                            <div className="w-full md:w-full rounded-[30px] overflow-hidden">
                                <Link to={`/carousel/${index}`}>
                                    <img
                                        src={item.img}
                                        className="carousel-image w-full h-full rounded-[30px] transition duration-300 ease-in-out"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
