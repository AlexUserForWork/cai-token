import React from "react";
import Title from "../assets/images/Asset 77_2x.png";
import Card from "../assets/images/Asset 74_2x.png";
import Cat1 from "../assets/images/Asset 104_2x.png";
import Cat2 from "../assets/images/Asset 103_2x.png";
import Cat3 from "../assets/images/Asset 102_2x.png";
import Cat4 from "../assets/images/Asset 101_2x.png";
import Catmain1 from "../assets/images/Asset 75_2x.png";
import Catmain2 from "../assets/images/Asset 76_2x.png";
import Star from "../assets/images/Asset 78_2x.png";

const Toke = () => {
    return (
        <div className="w-full back-token min-h-[700px] overflow-hidden">
            <div className="container mx-auto min-h-[700px] py-5 relative">
                <div data-aos="zoom-in" className="flex justify-center">
                    <img src={Title} className="h-[100px]" alt="" />
                </div>
                <img
                    src={Star}
                    className="absolute w-[30px] bottom-96 md:bottom-[550px] left-10 rotate-infinite"
                    alt=""
                />
                <img
                    src={Star}
                    className="absolute w-[60px] bottom-[900px] md:bottom-40 md:left-72 left-80 rotate-infinite"
                    alt=""
                />
                <img
                    data-aos="fade-right"
                    src={Catmain2}
                    className="absolute bottom-0 left-[-50px] hidden md:block"
                    alt=""
                />
                <div className="flex flex-wrap justify-evenly py-10">
                    <div className="w-[250px] h-[250px] relative mb-10">
                        <img
                            src={Card}
                            className="w-full h-full absolute"
                            alt=""
                        />
                        <div className="w-full absolute flex justify-center top-[-50px]">
                            <img
                                src={Cat1}
                                className="h-[130px] w-[130px] absolute left-"
                                alt=""
                            />
                        </div>
                        <div className="absolute w-full h-full flex flex-col justify-center items-center">
                            <p className="text-[34px] font-bold text-[#299452]">
                                69 Trillion %
                            </p>
                            <p className="text-[20px] font-bold">
                                Total Supply
                            </p>
                        </div>
                    </div>
                    <div className="w-[250px] h-[250px] relative  mb-10">
                        <img
                            src={Card}
                            className="w-full h-full absolute"
                            alt=""
                        />
                        <div className="w-full absolute flex justify-center top-[-50px]">
                            <img
                                src={Cat2}
                                className="h-[130px] w-[130px] absolute left-"
                                alt=""
                            />
                        </div>
                        <div className="absolute w-full h-full flex flex-col justify-center items-center">
                            <p className="text-[34px] font-bold text-[#299452]">
                                100%
                            </p>
                            <p className="text-[20px] font-bold">LP Burn</p>
                        </div>
                    </div>
                    <div className="w-[250px] h-[250px] relative  mb-10">
                        <img
                            src={Card}
                            className="w-full h-full absolute"
                            alt=""
                        />
                        <div className="w-full absolute flex justify-center top-[-50px]">
                            <img
                                src={Cat3}
                                className="h-[130px] w-[130px] absolute left-"
                                alt=""
                            />
                        </div>
                        <div className="absolute w-full h-full flex flex-col justify-center items-center">
                            <p className="text-[34px] font-bold text-[#299452]">
                                100%
                            </p>
                            <p className="text-[20px] font-bold">
                                Renounced Ownership
                            </p>
                        </div>
                    </div>
                    <div className="w-[250px] h-[250px] relative  mb-10">
                        <img
                            src={Card}
                            className="w-full h-full absolute"
                            alt=""
                        />
                        <div className="w-full absolute flex justify-center top-[-50px]">
                            <img
                                src={Cat4}
                                className="h-[130px] w-[130px] absolute left-"
                                alt=""
                            />
                        </div>
                        <div className="absolute w-full h-full flex flex-col justify-center items-center">
                            <p className="text-[34px] font-bold text-[#299452]">
                                0%
                            </p>
                            <p className="text-[20px] font-bold">
                                Buy/Sell Tax
                            </p>
                        </div>
                    </div>
                </div>
                <img
                    src={Catmain1}
                    data-aos="fade-left"
                    className="absolute bottom-0 right-[-50px] hidden md:block"
                    alt=""
                />
                <img
                    src={Star}
                    className="absolute w-[30px] top-32 right-0 rotate-infinite"
                    alt=""
                />
                <img
                    src={Star}
                    className="absolute w-[60px] bottom-40 right-80 md:right-72 rotate-infinite"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Toke;
