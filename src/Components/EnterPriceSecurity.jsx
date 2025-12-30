import React from "react";
import {
  FiLock,
  FiGlobe,
  FiShield,
  FiKey,
  FiPlayCircle,
} from "react-icons/fi";
import { MdHealthAndSafety } from "react-icons/md";
import { HiOutlineShieldCheck } from "react-icons/hi";
import EnterPriceVideo from '../assets/EnterPrice_Security_Videos/EnterPrice_Security_Video.mp4';
import { FaChalkboardTeacher, FaCrown, FaFilm, FaLanguage, FaLayerGroup, FaPlay, FaPlayCircle, FaRegStar, FaRegUser, FaThLarge, FaUserCircle, FaVideo } from "react-icons/fa";

const EnterpriseSecurity = () => {
  return (

    <>

            <section className="w-full bg-white text-[#0f1317] py-20 px-6 lg:px-20 2xl:px-90 flex flex-col lg:flex-row gap-16 items-center">

                    {/* LEFT SIDE TEXT SECTION */}

                    <div className="flex-1 max-w-xl">
                        
                        <h2 className="text-4xl lg:text-6xl font-sans mb-5 " style={{ fontFamily: 'Roboto, sans-serif' }}>
                            Services
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-8 font-medium">
                            We deliver high-quality creator-led videos trusted by brands, powered by a trained creator community, AI-assisted workflows, and campaign-ready execution—built for scale, speed, and brand safety.
                        </p>

                        <button className="bg-[#0f1317] text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition flex items-center gap-2 cursor-pointer">
                             Book a Creator Today →
                        </button>

                    </div>

                    {/* RIGHT SIDE ICON GRID */}
                    <div className="flex-1 flex flex-col items-center lg:items-center ">

                        {/* TOP ROW ICONS */}
                        <div className="grid grid-cols-3 gap-20 text-center mb-10">
                        
                                {/* SOC 2 */}
                                <div className="flex flex-col items-center">
                                    <FiPlayCircle className="text-3xl" />
                                    <p className="font-semibold mt-2 text-xs sm:text-xs">UGC & <br />Testimonial Videos</p>
                                </div>

                                {/* GDPR */}
                                <div className="flex flex-col items-center">
                                    <FaUserCircle className="text-3xl" />
                                    <p className="font-semibold mt-2 text-xs sm:text-xs">Brand Face Videos<br />(dedicated creators)</p>
                                </div>

                                {/* HIPAA */}
                                <div className="flex flex-col items-center">
                                    <FaVideo className="text-3xl" />
                                    <p className="font-semibold mt-2 text-xs sm:text-xs">Shorts/Reels Production</p>
                                </div>

                        </div>

                        {/* DIVIDER + Middle text */}
                        <div className="flex items-center w-full justify-center mb-10">

                                <div className="border-t border-gray-300 w-1/4 hidden sm:block"></div>

                                <p className="px-4 text-sm font-medium whitespace-nowrap">
                                    Peace of mind included
                                </p>

                                <div className="border-t border-gray-300 w-1/4 hidden sm:block"></div>

                                </div>

                                {/* BOTTOM ROW ICONS */}
                                <div className="grid grid-cols-3 gap-10 text-center">

                                {/* ISO CERTIFIED */}
                                <div className="flex flex-col items-center">
                                    <FaChalkboardTeacher className="text-3xl" />
                                    <p className="font-semibold mt-2 text-xs sm:text-xs">
                                    Explainer Creator Videos<br />
                                    </p>
                                </div>

                                {/* AES Encryption */}
                                <div className="flex flex-col items-center">
                                    <FaLanguage className="text-3xl" />
                                    <p className="font-semibold mt-2 text-xs sm:text-xs">
                                    Regional Face Content <br /> (Hindi + regional languages)
                                    </p>
                                </div>

                                {/* SSO */}
                                <div className="flex flex-col items-center">
                                    <FaLayerGroup className="text-3xl" />
                                    <p className="font-semibold mt-2 text-xs sm:text-xs">
                                    Bulk Content Video Creation
                                    </p>
                                </div>

                        </div>

                    </div>

            </section>

            <section className="w-full flex justify-center px-4 py-8">
            
            
                    <div className="relative w-full max-w-[1040px]  2xl:max-w-[1290px] rounded-3xl overflow-hidden">

                        {/* VIDEO BACKGROUND */}
                        <video className="w-full h-[100vh]  2xl:h-[80vh] object-cover"  autoPlay loop  muted playsInline>
                            <source src={EnterPriceVideo} type="video/mp4" />
                        </video>

                        {/* DARK OVERLAY */}
                        {/* <div className="absolute inset-0 bg-black/60"></div> */}

                        {/* CENTER CONTENT */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-10">

                                {/* BOTTOM RIGHT CTA CARD */}
                                <div className=" absolute bottom-6 right-6 bg-[#c4c3c0] backdrop-blur-md px-10 py-4 rounded-xl shadow-xl flex items-center gap-3 " >

                                    <div className="w-15 h-10 bg-[#17d3fc] rounded-lg flex items-center justify-center">
                                        <FaPlay />
                                    </div>

                                    <div className="text-black font-medium text-sm sm:text-base text-left">
                                        See How Businesses <br />grow with Vimeo
                                    </div>

                                </div>

                        </div>

                        

                    </div>
                


            </section>

    </>
    
  );
};

export default EnterpriseSecurity;
