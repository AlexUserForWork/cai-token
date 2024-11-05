import React from "react";

const Footer = () => {
    return (
        <div className="w-full h-[300px] md:h-[200px] bg-red back-footer">
            <div className="container mx-auto h-full flex flex-col md:flex-row justify-between items-center">
                <div className="h-full flex justify-start items-center ">
                    <img
                        src={
                            "https://static.wixstatic.com/media/7f442f_40a4c321d45f4834a757a0ab2e2b2832~mv2.png/v1/fill/w_590,h_236,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2089_2x.png"
                        }
                        className="h-[100px]"
                        alt=""
                    />
                </div>
                <div className="font-groboldov ">
                    <p className="text-white text-[20px] mb-3">Follow us</p>
                    <div className="flex">
                        <a href="https://x.com/kai_ethereum">
                            <img
                                className="w-[70px] h-[70px] hover:scale-90 transition-transform duration-500 cursor-pointer"
                                src="https://static.wixstatic.com/media/7f442f_1985512a49c94f348b8c0083e3f21b1e~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2020_2x.png"
                                alt=""
                                onMouseOver={(e) =>
                                    (e.currentTarget.src =
                                        "https://static.wixstatic.com/media/7f442f_1985512a49c94f348b8c0083e3f21b1e~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2020_2x.png")
                                }
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transition =
                                        e.currentTarget.src =
                                            "https://static.wixstatic.com/media/7f442f_444e6a63a191464bba34538194930b5c~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2017_2x.png";
                                }}
                            />
                        </a>
                        <a href="https://t.me/kai_ethereum">
                            <img
                                className="w-[70px] h-[70px] hover:scale-90 transition-transform duration-500 cursor-pointer"
                                src="https://static.wixstatic.com/media/7f442f_93d9c59e46fd4ff0b51d8d805a160b5e~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2019_2x.png"
                                alt=""
                                onMouseOver={(e) =>
                                    (e.currentTarget.src =
                                        "https://static.wixstatic.com/media/7f442f_93d9c59e46fd4ff0b51d8d805a160b5e~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2019_2x.png")
                                }
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transition =
                                        "transform 0.5s";
                                    e.currentTarget.src =
                                        "https://static.wixstatic.com/media/7f442f_36ccbfec276f485f83f6e1886cad1357~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2016_2x.png";
                                }}
                            />
                        </a>
                        <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x86deb03f4c284a4439108856126aa1137f9077b7?t=1730297476609">
                            <img
                                className="w-[70px] h-[70px] hover:scale-90 transition-transform duration-500 cursor-pointer"
                                src="https://static.wixstatic.com/media/7f442f_b8d486202cd9423d8eaebabb3925f6c0~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2018_2x.png"
                                alt=""
                                onMouseOver={(e) =>
                                    (e.currentTarget.src =
                                        "https://static.wixstatic.com/media/7f442f_b8d486202cd9423d8eaebabb3925f6c0~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2018_2x.png")
                                }
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transition =
                                        "transform 0.5s";
                                    e.currentTarget.src =
                                        "https://static.wixstatic.com/media/7f442f_0889479a745a45a1b5e2048b3f2498c3~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2015_2x.png";
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
