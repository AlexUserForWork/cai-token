import React, { useEffect, useRef, useState } from "react";
import Img1 from "../assets/images/img1.png";
import Img2 from "../assets/images/img2.png";
import Img3 from "../assets/images/img3.png";
import Img4 from "../assets/images/img4.png";
import Img5 from "../assets/images/img5.png";

const MobileAnimation = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <div
                ref={sectionRef}
                className="w-full h-[60vh] relative overflow-hidden block md:hidden"
            >
                <div className="absolute top-0 left-0 w-[110vw] h-full overflow-hidden">
                    <img
                        src={Img1}
                        alt=""
                        className={`w-full h-full absolute transition-transform object-cover duration-500 ${
                            isVisible ? "" : ""
                        }`}
                        style={{ top: 0, left: 0 }}
                    />
                    <img
                        src={Img2}
                        alt=""
                        className={`w-full h-2/3 absolute transition-transform duration-500 ${
                            isVisible ? "translate-x-0" : "translate-x-[-200px]"
                        }`}
                        style={{ bottom: 0, left: 0 }}
                    />
                    <img
                        src={Img3}
                        alt=""
                        className="w-full h-2/3 absolute"
                        style={{ bottom: 0, left: 0 }}
                    />
                </div>

                {/* Foreground Content with Infinite Animation */}
                <div className="w-full absolute flex flex-col items-center justify-start px-5 h-full">
                    <img src={Img5} alt="" className="h-[120px]" />
                    <img
                        src={Img4}
                        alt=""
                        className="h-[120px] w-[80%] animate-bounceVerticalmob object-contain mt-[100px]"
                    />
                </div>
            </div>
        </>
    );
};

export default MobileAnimation;
