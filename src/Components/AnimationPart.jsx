import React, { useEffect, useRef, useState } from "react";
import Img1 from "../assets/images/img1.png";
import Img2 from "../assets/images/img2.png";
import Img3 from "../assets/images/img3.png";
import Img4 from "../assets/images/img4.png";
import Img5 from "../assets/images/img5.png";
import DesktopAnimation from "./DesktopAnimation";
import MobileAnimation from "./MobileAnimation";

const AnimationPart = () => {
    return (
        <>
            <DesktopAnimation />
            <MobileAnimation />
        </>
    );
};

export default AnimationPart;
