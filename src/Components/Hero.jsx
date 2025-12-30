import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import HomeBannerVideo from "../assets/Hero_Section_Video/Hero_Banner_Video.mp4";
import Vectorv from "../assets/Hero_Section_Video/VectorV.svg";

const Hero = () => {

    

    return (

        <>

                {/* overshoot hero section start */}
                <section className="w-full flex justify-center px-4 py-8">


                        <div className="relative w-full max-w-[1040px]  2xl:max-w-[1290px] rounded-3xl overflow-hidden">

                                
                                
                                {/* Video Background */}
                                <video src={HomeBannerVideo} className="w-full h-screen  2xl:h-[80vh] object-cover" autoPlay loop  muted playsInline preload="metadata">
                                    {/* <source src={HomeBannerVideo} type="video/mp4" /> */}
                                    {/* <source src="/Videos/Hero_Banner_Video.mp4" type="video/mp4" /> */}
                                </video>

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/60"></div>
            
                                {/* Center Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-10">
                                

                                        <h1 className=" text-white font-sans  text-xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl leading-tight" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                            Your Content, Our Creators <br /> Infinite Reach
                                        </h1>

                                        <p className="text-gray-200 text-xs sm:text-lg md:text-base 2xl:text-[16px] font-sans mt-4 max-w-xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                            We connect brands with trained creators to turn your scripts into high-quality, face-led videos that build trust, engagement, and conversions.
                                        </p>

                                        {/* Buttons */}
                                        <div className="flex items-center gap-5 mt-8">
                                            
                                            {/* Left Button - Blue */}
                                            {/* <a href="#" className=" flex items-center gap-2 bg-[#17d3fc]  text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-[#11c0e5]  transition-all " >
                                                See plans
                                                <FaArrowRight />
                                            </a> */}

                                            {/* Right Button Text only */}
                                            {/* <a href="#" className="flex items-center gap-2 text-white text-lg font-semibold hover:underline  " >
                                                Start for free
                                                <FaArrowRight />
                                            </a> */}

                                        </div>


                                </div>

                            

                        </div>
                    


                </section>
                {/* overshoot hero section end */}


                {/* Built How You Work Section */}
                <section className="relative w-full min-h-screen flex justify-center items-center px-4 py-20 overflow-hidden mt-10">

                        {/* V Shape Background - Direct SVG as Image */}
                        <div className="absolute inset-0 -z-20 flex items-center justify-center overflow-hidden">
                            <img 
                                src={Vectorv} 
                                alt="V Shape Background"
                                className="w-280 h-full object-contain opacity-30"
                            />
                        </div>

                        {/* White Gradient Overlay  */}
                        <div
                            className="absolute inset-0 -z-10"
                            style={{
                                background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.8) 7%, white 70%, white 100%)"
                            }}
                        ></div>

                        {/* Main Content */}
                        <div className="text-center max-w-[800px] mx-auto relative z-10">

                            <h2 className="text-black font-semibold text-4xl md:text-4xl lg:text-5xl 2xl:text-7xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                What We Do
                            </h2>

                            <p className="text-gray-600 mt-4 text-xs md:text-[15px] max-w-[650px] mx-auto font-medium">
                                We are a Creator-as-a-Service Video Agency providing on-demand faces for your video content.
                                Brands send us scripts — we deliver polished videos using trained creators ready to represent 
                                your product or service.
                            </p>

                            <div className="mt-10">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 bg-black text-white font-medium px-6 py-3 rounded-xl text-base shadow-md hover:bg-gray-900 transition-all"
                                >
                                    Turn Your Script Into Videos
                                </a>
                            </div>

                        </div>

                </section>



        </>

    );

};

export default Hero;
