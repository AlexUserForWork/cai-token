import React from "react";
import BackGround from "../assets/images/Asset 38_2x.png";
import Cat1 from "../assets/images/Asset 34_2x.png";
import Title from "../assets/images/Asset 37_2x.png";
import Title1 from "../assets/images/Asset 107_2x.png";
import Title2 from "../assets/images/Asset 108_2x.png";
import Button1 from "../assets/images/Asset 36_2x.png";
import Button2 from "../assets/images/Asset 35_2x.png";

const FirstPart = () => {
    return (
        <div id="about" className="relative">
            <div className="container mx-auto px-10 hidden md:block">
                <div className="first-part flex flex-col md:flex-row relative">
                    <div data-aos="flip-up" className="w-1/2 h-[700px]">
                        <div className="w-full h-full relative">
                            <img
                                src={BackGround}
                                className="w-full h-full"
                                alt=""
                            />
                            <img
                                src={Cat1}
                                className="w-full h-full object-contain absolute top-0 left-0 shakehead-animation"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-1/2 full flex flex-col justify-center py-10 lg:px-20">
                        <div
                            data-aos="flip-down"
                            className="flex flex-col px-5 font-groboldov font-extrabold tracking-wide"
                        >
                            <img
                                className="md:w-[350px] h-[200px]"
                                src={Title}
                                alt=""
                            />
                            <p className="text-[20px] mb-10 ">
                                Ready to ride the CAI rocket? Zero <br /> taxes
                                and Infinite FUN! 100% trust with <br /> the
                                liquidity pool BURNT to a crisp! <br /> HODL
                                tight or FOMO later, cause this <br /> meme is
                                taking off! Swap your SOL for <br /> $CAI and
                                join the moon mission!
                            </p>
                            <p className="text-[24px] font-bold mb-10">
                                Let’s send CAI into orbit.
                            </p>
                            <button className="relative w-[250px] h-auto group">
                                <img
                                    src={Button1}
                                    alt=""
                                    className="w-[250px] transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <img
                                    src={Button2}
                                    alt=""
                                    className="w-[220px] absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center md:hidden relative">
                <img
                    src={Title2}
                    className="w-[40%] h-[100px] absolute"
                    alt=""
                />
                <img
                    src={Title1}
                    className="w-[55%] h-[80px] absolute top-16 "
                    alt=""
                />
                <div className="w-3/4 h-[300px] relative top-[120px] mb-[120px]">
                    <div className="w-full h-full absolute">
                        <img
                            src={BackGround}
                            className="w-full h-full"
                            alt=""
                        />
                    </div>
                    <div className="w-full h-full absolute p-5">
                        <img
                            src={Cat1}
                            className="w-full h-full object-contain shakehead-animation"
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex flex-col font-luckiest ">
                    <p className="text-[14px] mb-5 px-5">
                        Ready to ride the CAI rocket? Zero taxes and Infinite
                        FUN! 100% trust with the liquidity pool BURNT to a
                        crisp! HODL tight or FOMO later, cause this meme is
                        taking off! Swap your SOL for $CAI and join the moon
                        mission!
                    </p>
                    <p className="text-[14px] font-bold px-5 mb-10">
                        Let’s send CAI into orbit.
                    </p>
                    <div className="flex justify-center w-full">
                        <button className="relative w-[170px] h-auto group">
                            <img
                                src={Button1}
                                alt=""
                                className="w-[170px] absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0"
                            />
                            <img
                                src={Button2}
                                alt=""
                                className="w-[150px] absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstPart;
