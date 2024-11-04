import React, { useEffect, useState } from "react";
import Title1 from "../assets/images/Asset 60_2x.png";
import Title2 from "../assets/images/Asset 58_2x.png";
import Title3 from "../assets/images/Asset 59_2x.png";
import Background from "../assets/images/Asset 38_2x.png";
import Cat1 from "../assets/images/Asset 62_2x.png";
import Cat2 from "../assets/images/Asset 61_2x.png";

const Titles = () => {
    const [shake, setShake] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShake(true);
            setTimeout(() => setShake(false), 600); // Duration of the shake animation
        }, 2000); // Shake every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="w-full min-h-[100vh]">
            <div className="container mx-auto">
                <div
                    data-aos="zoom-in"
                    className="w-full flex justify-center relative"
                >
                    <img
                        src={Title3}
                        className="h-[50px] md:h-[100px] mt-5 md:mt-10"
                        alt=""
                    />
                    <img
                        src={Title1}
                        className="h-[100px] md:h-[200px]"
                        alt=""
                    />
                    <img
                        src={Title2}
                        className="h-[50px] md:h-[100px] mt-5 md:mt-10"
                        alt=""
                    />
                </div>
                <div className="w-full flex flex-col lg:flex-row">
                    <div className="py-5 lg:w-1/2 ">
                        <div className="w-full backtitle1 min-h-[200px] flex flex-col justify-center items-start lg:py-5 px-10 md:px-20">
                            <p className="text-[20px] md:text-[28px] font-bold text-[#299452]">
                                SET UP YOUR WALLET
                            </p>
                            <p className="text-[14px] md:text-[20px]">
                                Download MetaMask or your preferred wallet from
                                the App Store or Google Play Store for free.
                                Desktop users can download the Google Chrome
                                extension by visiting metamask.io.
                            </p>
                        </div>
                    </div>
                    <div
                        className={`flex lg:w-1/2 items-end justify-end ${
                            shake ? "shake" : ""
                        } pt-10`}
                    >
                        <img src={Cat1} className="w-1/2" alt="" />
                    </div>
                </div>
                <div className="w-full flex  justify-end">
                    <div className="w-full lg:w-1/2">
                        <div className="w-full backtitle1 min-h-[200px] flex flex-col justify-center items-start lg:py-10 px-10 md:px-20">
                            <p className="text-[20px] md:text-[28px] font-bold text-[#299452]">
                                SET UP YOUR WALLET
                            </p>
                            <p className="text-[14px] md:text-[20px]">
                                Connect to Uniswap. Go to app.uniswap.org in
                                Google Chrome or use the browser within your
                                MetaMask app. Connect your wallet. Paste the
                                $KAI token address into Uniswap, select $KAI
                                COIN, and confirm. When MetaMask prompts you for
                                a wallet signature, sign it.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row">
                    <div
                        className={`hidden lg:flex  items-end justify-start ${
                            shake ? "shake" : ""
                        } `}
                    >
                        <img src={Cat2} className=" lg:h-[300px] " alt="" />
                    </div>
                    <div className="py-5 lg:w-1/2">
                        <div className="w-full backtitle1 min-h-[200px] flex flex-col justify-center items-start px-10 md:px-20">
                            <p className="text-[20px] md:text-[28px] font-bold text-[#299452]">
                                SET UP YOUR WALLET
                            </p>
                            <p className="text-[14px] md:text-[20px]">
                                Download MetaMask or your preferred wallet from
                                the App Store or Google Play Store for free.
                                Desktop users can download the Google Chrome
                                extension by visiting metamask.io.
                            </p>
                        </div>
                    </div>
                    <div
                        className={`flex lg:hidden items-end justify-start ${
                            shake ? "shake" : ""
                        } `}
                    >
                        <img src={Cat2} className="w-1/2" alt="" />
                    </div>
                </div>

                <>
                    {/* <div className="w-full h-[200px] md:h-[250px] flex flex-col md:flex-row justify-between items-end md:items-start">
                    <div className="w-full md:w-1/2 backtitle1  md:px-20 md:py-10  px-10 py-4">
                        <p className="text-[20px] md:text-[28px] font-bold text-[#299452]">
                            VISIT UNISWAP
                        </p>
                        <p className="text-[14px] md:text-[20px]">
                            Download MetaMask or your preferred wallet from the
                            App Store or Google Play Store for free. Desktop
                            users can download the Google Chrome extension by
                            visiting metamask.io.
                        </p>
                    </div>

                    <div className="">
                        <img
                            src={Cat1}
                            className={`h-[120px] md:h-[200px] mt-[110px] md:mt-[110px] ${
                                shake ? "shake" : ""
                            }`}
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-full h-[300px] md:h-[300px] flex  items-end relative mb-5">
                    <div className="w-full md:w-1/2 backtitle2  md:px-20 md:py-10 px-10 py-4 absolute right-0">
                        <p className="text-[18px] md:text-[28px] font-bold text-[#299452]">
                            VISIT UNISWAP
                        </p>
                        <p className="text-[12px] md:text-[20px]">
                            Connect to Uniswap. Go to app.uniswap.org in Google
                            Chrome or use the browser within your MetaMask app.
                            Connect your wallet. Paste the $KAI token address
                            into Uniswap, select $KAI COIN, and confirm. When
                            MetaMask prompts you for a wallet signature, sign
                            it.
                        </p>
                    </div>
                </div>
                <div className="w-full h-[220px]  flex flex-col md:h-[340px] md:flex-row justify-start items-start md:items-start">
                    <div className="w-full lg:w-1/2 backtitle1 md:px-20 md:py-10  px-10 py-1 block md:hidden left-[300px]">
                        <p className="text-[20px] md:text-[28px] font-bold text-[#299452]">
                            SWAP ETH FOR $KAI
                        </p>
                        <p className="text-[14px] md:text-[20px]">
                            Trade your ETH for $KAI. We have ZERO taxes, so you
                            don’t need to worry about buying with a specific
                            slippage, although you may need to use slippage
                            during times of market volatility.
                        </p>
                    </div>
                    <div>
                        <div className="">
                            <img
                                src={Cat2}
                                className={`h-[200px] md:h-[300px] mt-5 md:mt-20 z-[999] ${
                                    shake ? "shake" : ""
                                }`}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 backtitle1 hidden md:block md:h-[300px] md:px-20 md:py-10  px-10 py-4 absolute left-[300px]">
                        <p className="text-[20px] md:text-[28px] font-bold text-[#299452]">
                            SWAP ETH FOR $KAI
                        </p>
                        <p className="text-[14px] md:text-[20px]">
                            Trade your ETH for $KAI. We have ZERO taxes, so you
                            don’t need to worry about buying with a specific
                            slippage, although you may need to use slippage
                            during times of market volatility.
                        </p>
                    </div>
                </div> */}
                </>
            </div>
        </div>
    );
};

export default Titles;
