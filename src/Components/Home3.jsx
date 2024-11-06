import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import cai from '../assets/images/Cai_6.png';

function Home3() {
    useEffect(() => {
        AOS.init({ duration: 900 }); // Animatsiya davomiyligi (ms)
    }, []);

    return (
        <div className="w-full min-h-[100vh] relative">
            <Navbar />
            <div className="bg-img3 w-full h-full">
                <div className="container mx-auto h-full flex flex-col gap-[30px] justify-center items-center px-[80px]">
                    <div className="flex justify-center items-center mt-[150px]">
                        <img
                            src="https://static.wixstatic.com/media/7f442f_159002452dbd436f933ded3c77eab4e3~mv2.png/v1/fill/w_246,h_234,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2096_2x.png"
                            alt=""
                            class="rotate-slide-in2 w-[50px] md:w-[110px] md:h-[110px] hidden xl:block"
                        />
                        <div
                            data-aos="flip-up"
                            className="flex justify-center items-center flex-wrap"
                        >
                            <img
                                className="w-[64px] h-[45px] md:w-[175px] md:h-[122px]"
                                src={cai}
                                // src="https://static.wixstatic.com/media/7f442f_3280aaed0d20445d8665bbbbbe4ec423~mv2.png/v1/fill/w_350,h_246,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2098_2x.png"
                                alt=""
                            />
                            <img
                                className="w-[169px] h-[39px] md:w-[529px] md:h-[122px]"
                                src="https://static.wixstatic.com/media/7f442f_ec49c70478de4006911ddf5c8490317d~mv2.png/v1/fill/w_1058,h_246,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2099_2x.png"
                                alt=""
                            />
                        </div>
                        <img
                            src="https://static.wixstatic.com/media/7f442f_08cd6993af0e4a729f6eeb66a249e356~mv2.png/v1/fill/w_222,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2097_2x.png"
                            alt=""
                            class="rotate-slide-in w-[50px] md:w-[110px] md:h-[110px] hidden xl:block"
                        />
                    </div>
                    <div className="flex flex-col gap-[20px] md:px-[0] mb-[150px]">
                        <div className="flex flex-col lg:flex-row gap-[20px]">
                            <div className="w-full xl:w-[50%] flex flex-col gap-[20px]">
                                <div className="overflow-hidden rounded-[25px]">
                                    <img
                                        className="w-full md:h-[650px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                        src="https://static.wixstatic.com/media/7f442f_168927c994f8425290c006a9db9fa3e1~mv2.png/v1/fit/w_960,h_1360,q_90/7f442f_168927c994f8425290c006a9db9fa3e1~mv2.webp"
                                        alt=""
                                    />
                                </div>
                                <div className="w-full flex gap-[20px]">
                                    <div className="w-[50%] md:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full  h-full md:h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_5721402a0ac84e1b8eceb8ddb18d05e1~mv2.png/v1/fill/w_1722,h_2435,q_90/7f442f_5721402a0ac84e1b8eceb8ddb18d05e1~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[50%] md:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-full md:h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_5db50e7b73a4449188e65fd522f7daca~mv2.png/v1/fill/w_2435,h_1721,q_90/7f442f_5db50e7b73a4449188e65fd522f7daca~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full xl:w-[50%] flex md:flex-col flex-col-reverse gap-[20px]">
                                <div className="flex gap-[20px]">
                                    <div className="w-[50%] md:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-auto md:h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_06217cb89f9f48478b6e544c3495bdfe~mv2.png/v1/fill/w_2435,h_1721,q_90/7f442f_06217cb89f9f48478b6e544c3495bdfe~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[50%] md:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-auto md:h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_983cebcf483b4cb5b00dce7f3b6a28ca~mv2.png/v1/fill/w_2435,h_1721,q_90/7f442f_983cebcf483b4cb5b00dce7f3b6a28ca~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="overflow-hidden rounded-[25px]">
                                    <img
                                        className="w-full md:h-[650px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                        src="https://static.wixstatic.com/media/7f442f_ed224f7bdb0a4adea40d388d01ec1399~mv2.png/v1/fill/w_1346,h_1346,q_90/7f442f_ed224f7bdb0a4adea40d388d01ec1399~mv2.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex md:flex-row flex-col gap-[20px]">
                            <div className="w-full xl:w-[50%] flex xl:flex-col flex-col-reverse gap-[20px]">
                                <div className="flex gap-[20px]">
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_1dc4825b93784587b55d71faa207fb86~mv2.png/v1/fill/w_658,h_660,q_90/7f442f_1dc4825b93784587b55d71faa207fb86~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_e8c32b30e8b442e9b2a22a3ad54e410e~mv2.png/v1/fill/w_660,h_660,q_90/7f442f_e8c32b30e8b442e9b2a22a3ad54e410e~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="overflow-hidden rounded-[25px]">
                                    <img
                                        className="w-full xl:h-[650px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                        src="https://static.wixstatic.com/media/7f442f_4eed540d100345e98835fa3f345efcd2~mv2.png/v1/fill/w_1348,h_1348,q_90/7f442f_4eed540d100345e98835fa3f345efcd2~mv2.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-full xl:w-[50%] flex flex-col gap-[20px]">
                                <div className="overflow-hidden rounded-[25px]">
                                    <img
                                        className="w-full xl:h-[650px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                        src="https://static.wixstatic.com/media/7f442f_d7ed8abf47e54dc69398e4ec3c97ee8a~mv2.png/v1/fill/w_1346,h_1346,q_90/7f442f_d7ed8abf47e54dc69398e4ec3c97ee8a~mv2.webp"
                                        alt=""
                                    />
                                </div>
                                <div className="flex gap-[20px]">
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_39bdedacf9284b8ab3d8a04a18a8cc83~mv2.png/v1/fill/w_658,h_658,q_90/7f442f_39bdedacf9284b8ab3d8a04a18a8cc83~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_d9f4db82ef3a43f3905c358257f240db~mv2.png/v1/fill/w_658,h_658,q_90/7f442f_d9f4db82ef3a43f3905c358257f240db~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-[20px]">
                            <div className="w-full xl:w-[50%] flex flex-col gap-[20px]">
                                <div className="overflow-hidden rounded-[25px]">
                                    <img
                                        className="w-full xl:h-[650px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                        src="https://static.wixstatic.com/media/7f442f_f8d3650c8ef74f21b64b05e779aa4dd3~mv2.png/v1/fill/w_1348,h_1348,q_90/7f442f_f8d3650c8ef74f21b64b05e779aa4dd3~mv2.webp"
                                        alt=""
                                    />
                                </div>
                                <div className="w-full flex gap-[20px]">
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-auto xl:h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_9f14fa20729e49c187ac62f2013fbabf~mv2.png/v1/fill/w_658,h_660,q_90/7f442f_9f14fa20729e49c187ac62f2013fbabf~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-auto xl:h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_eb5dd65e52d340fc8c3db9595b5ab276~mv2.png/v1/fill/w_660,h_660,q_90/7f442f_eb5dd65e52d340fc8c3db9595b5ab276~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full xl:w-[50%] flex flex-col-reverse gap-[20px]">
                                <div className="flex gap-[20px]">
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-auto md:h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_6225b58d8e5143f0baff5afec8291640~mv2.png/v1/fill/w_658,h_658,q_90/7f442f_6225b58d8e5143f0baff5afec8291640~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-auto xl:h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_92d70f75de3a4cf88297c4b94cb0ca35~mv2.png/v1/fill/w_658,h_658,q_90/7f442f_92d70f75de3a4cf88297c4b94cb0ca35~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="overflow-hidden rounded-[25px]">
                                    <img
                                        className="w-full xl:h-[650px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                        src="https://static.wixstatic.com/media/7f442f_52934fa1c5394aa2a0ff2cc1fa523066~mv2.png/v1/fill/w_1346,h_1346,q_90/7f442f_52934fa1c5394aa2a0ff2cc1fa523066~mv2.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex xl:flex-row flex-col gap-[20px]">
                            <div className="w-full xl:w-[50%] flex flex-col gap-[20px]">
                                <div className="overflow-hidden rounded-[25px]">
                                    <img
                                        className="w-full xl:h-[650px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                        src="https://static.wixstatic.com/media/7f442f_d935cbb08470468a89f23a1fb0be8cb4~mv2.png/v1/fill/w_1348,h_1348,q_90/7f442f_d935cbb08470468a89f23a1fb0be8cb4~mv2.webp"
                                        alt=""
                                    />
                                </div>
                                <div className="flex gap-[20px]">
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_c7bba7b0461d40efbf46dad33e438bac~mv2.png/v1/fill/w_658,h_660,q_90/7f442f_c7bba7b0461d40efbf46dad33e438bac~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_9f63febcd8ea42c0a5f8d81be9274610~mv2.png/v1/fill/w_660,h_660,q_90/7f442f_9f63febcd8ea42c0a5f8d81be9274610~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full xl:w-[50%] flex md:flex-col flex-col-reverse gap-[20px]">
                                <div className="flex gap-[20px]">
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_0543fd317d154f43a12864ab51e67d26~mv2.png/v1/fill/w_658,h_658,q_90/7f442f_0543fd317d154f43a12864ab51e67d26~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_30cc494def944393960a7bd16caad839~mv2.png/v1/fill/w_658,h_658,q_90/7f442f_30cc494def944393960a7bd16caad839~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="overflow-hidden rounded-[25px]">
                                    <img
                                        className="w-full xl:h-[650px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                        src="https://static.wixstatic.com/media/7f442f_fddf069b373f4aae88d36c147a259240~mv2.png/v1/fill/w_1346,h_1346,q_90/7f442f_fddf069b373f4aae88d36c147a259240~mv2.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col xl:flex-row gap-[20px]">
                            <div className="w-full xl:w-[50%] flex flex-col-reverse gap-[20px]">
                                <div className="overflow-hidden rounded-[25px]">
                                    <img
                                        className="w-full xl:h-[650px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                        src="https://static.wixstatic.com/media/7f442f_9054320d322a4db5a8f5d7203695a92b~mv2.png/v1/fill/w_1348,h_1348,q_90/7f442f_9054320d322a4db5a8f5d7203695a92b~mv2.webp"
                                        alt=""
                                    />
                                </div>
                                <div className="w-full flex gap-[20px]">
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-auto xl:h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_c4df8f696dfc437eb6bee656045423e5~mv2.png/v1/fill/w_658,h_660,q_90/7f442f_c4df8f696dfc437eb6bee656045423e5~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-auto xl:h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_fac567a209844db69e969c2c074fef8d~mv2.png/v1/fill/w_660,h_660,q_90/7f442f_fac567a209844db69e969c2c074fef8d~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full xl:w-[50%] flex flex-col gap-[20px]">
                                <div className="flex gap-[20px]">
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-auto xl:h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_d6edc849d3784703a6bd9b18716d4e48~mv2.png/v1/fill/w_658,h_658,q_90/7f442f_d6edc849d3784703a6bd9b18716d4e48~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[50%] xl:h-[329px] h-[140px] overflow-hidden rounded-[25px]">
                                        <img
                                            className="w-full h-auto xl:h-[330px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                            src="https://static.wixstatic.com/media/7f442f_e56cf54a0ce441a3805992ab41afd7a0~mv2.png/v1/fill/w_658,h_658,q_90/7f442f_e56cf54a0ce441a3805992ab41afd7a0~mv2.webp"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="overflow-hidden rounded-[25px]">
                                    <img
                                        className="w-full md:h-[650px] transition-transform duration-500 hover:scale-[0.98] hover:brightness-90"
                                        src="https://static.wixstatic.com/media/7f442f_6a8890a8e2a04b818b6342861dedabd6~mv2.png/v1/fill/w_1346,h_1346,q_90/7f442f_6a8890a8e2a04b818b6342861dedabd6~mv2.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home3;
