import React, { useState, useEffect } from "react";
import { HashRouter, Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // New state for mobile menu
    const url = useLocation();
    const [currentUrl, setCurrentUrl] = useState(url.pathname);

    useEffect(() => {
        setCurrentUrl(url.pathname);
    }, [url]);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navbar */}
            <div
                className={`w-full hidden md:block h-[100px] fixed z-[999] ${
                    scroll ? "custom-background" : "bg-transparent"
                } transition-all duration-300`}
            >
                <div className="container flex h-full ">
                    <div className="w-full h-full flex justify-end">
                        <ul className="w-full  h-full flex justify-end gap-6 items-center text-[20px]">
                            <Link
                                to={"/"}
                                className={` ${
                                    currentUrl === "/"
                                        ? "border-[3px] rounded-[22px] border-black px-5 py-[3px] text-white bg-[#d36b0abe]"
                                        : "text-[#3A170D]"
                                }  font-bold`}
                            >
                                Home
                            </Link>
                            <Link
                                to="#about"
                                className="rounded-[22px] px-5 py-[3px] text-[#3A170D] font-bold"
                            >
                                About
                            </Link>
                            <li className="rounded-[22px] px-5 py-[3px] text-[#3A170D] font-bold">
                                How to buy
                            </li>
                            <li className="rounded-[22px] px-5 py-[3px] text-[#3A170D] font-bold">
                                Token
                            </li>
                            <li
                                className={` ${
                                    currentUrl === "/memo"
                                        ? "border-[3px] rounded-[22px] border-black px-5 py-[3px] bg-[#d36b0abe] text-white"
                                        : "text-[#3A170D]"
                                }  font-bold`}
                            >
                                <Link to={"/memo"}>Memo</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="w-full md:hidden fixed top-0 left-0 z-[999] bg-transparent">
                <div
                    className={`w-full h-[60px] ${
                        scroll ? "custom-background" : "bg-transparent"
                    } flex justify-end items-center px-10`}
                >
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="text-[30px] font-bold text-[#3A170D]"
                    >
                        ☰
                    </button>
                </div>

                {menuOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-[1000] flex items-center justify-center">
                        <div className=" w-full h-full back-footer flex flex-col items-center p-5">
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="self-end text-[30px] text-[#3A170D] font-bold mb-5 px-5"
                            >
                                × {/* Close icon */}
                            </button>
                            <ul className="flex flex-col text-[30px] font-bold">
                                <li
                                    className={` ${
                                        currentUrl === "/"
                                            ? "text-red-400 px-4 py-2 rounded"
                                            : "text-white px-4 py-2"
                                    }`}
                                >
                                    <Link
                                        to={"/"}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li
                                    className="text-white px-4 py-2"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    About
                                </li>
                                <li
                                    className="text-white px-4 py-2"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    How to buy
                                </li>
                                <li
                                    className="text-white px-4 py-2"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Token
                                </li>
                                <li
                                    className={` ${
                                        currentUrl === "/memo"
                                            ? "text-red-400 px-4 py-2"
                                            : "text-white px-4 py-2"
                                    }`}
                                >
                                    <Link
                                        to={"/memo"}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Memo
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
