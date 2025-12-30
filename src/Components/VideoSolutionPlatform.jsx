import React from "react";
import {
  FiUsers,
  FiTarget,
  FiMessageSquare,
  FiBookOpen,
  FiFilm,
  FiGlobe,
  FiArrowRight,
  FiPlay,
} from "react-icons/fi";

import VideoSolution from "../assets/Video_Solution_Videos/Video_Solution_1.mp4";
import { FaPlay } from "react-icons/fa";


const VideoSolutionVimeo = () => {


  const items = [
    {
      icon: <FiUsers className="w-6 h-6 pt-1 mt-1" />,
      title: "UGC Creator Videos",
      desc: "Real people, real stories for your brand.",
    },
    {
      icon: <FiTarget className="w-6 h-6 pt-1 mt-1" />,
      title: "Brand Face Videos ",
      desc: "Dedicated creators who represent your brand.",
    },
    {
      icon: <FiMessageSquare className="w-6 h-6 pt-1 mt-1" />,
      title: "Short-Form Reel Production",
      desc: "Viral videos built for Instagram, YouTube & ads",
    },
    {
      icon: <FiBookOpen className="w-6 h-6 pt-1 mt-1" />,
      title: "Multilingual Creator Content ",
      desc: "Hindi, English, regional faces available.",
    },
    {
      icon: <FiFilm className="w-6 h-6 pt-1 mt-1" />,
      title: "Bulk Creator Videos",
      desc: "Scale content at speed.",
    },
  ];

  const reviews = [
    {
      text: "The creative standard for hosting video. There is no alternative, and there doesn’t need to be.",
      name: "Meg Volk",
      role: "Sr. Producer",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      text: "Saved us so many times over the last several years!",
      name: "Eric Pokorny",
      role: "Video Director",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      text: "One tool for all the content we've ever produced. Amazing.",
      name: "Rainar Aasrand",
      role: "Content Lead",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  ];

  return (

        <section className="w-full bg-white py-20 px-6 lg:px-16 2xl:px-32 2xl:max-w-[1500px] 2xl:mx-auto">

              {/* LEFT HEADING SECTION */}
              <div className="max-w-4xl mb-12">

                    <h1 className="text-2xl sm:text-4xl md:text-4xl font-sans text-gray-900" style={{ fontFamily: 'Roboto, sans-serif' }}>
                      {/* A Video Solution Perfect for Everyone */}
                      Where Creators Build Campaigns That Perform
                    </h1>

                    <p className="text-gray-600 text-sm sm:text-lg mt-4 font-medium">
                     No matter your experience level, our creator community empowers you to collaborate, craft, and promote campaign videos that truly connect with audiences
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center px-5 py-3 bg-black text-white rounded-xl mt-6 font-medium hover:bg-gray-800 transition"
                    >
                      Get Faces for Your Content
                      <FiArrowRight className="ml-2" />
                    </a>


              </div>

              {/* MAIN TWO COLUMN SECTION */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-8">

                      {/* LEFT SIDE — VIDEO */}
                      <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-lg h-118">

                        {/* VIDEO */}
                        <video
                          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src={VideoSolution} type="video/mp4" />
                        </video>

                      </div>



                      {/* RIGHT SIDE — LIST EXACT SAME AS VIMEO */}
                      <div className="space-y-10">
                        {items.map((item, i) => (
                          <div key={i} className="flex gap-4">
                            {/* ICON */}
                            <div className="text-black">{item.icon}</div>

                            {/* TEXT */}
                            <div>
                              <h3 className="text-lg font-bold text-black flex items-center gap-1">
                                {item.title}
                                <FiArrowRight className="w-4 h-4" />
                              </h3>

                              <p className="text-gray-600 mt-1 text-xs sm:text-base md:text-base font-medium leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

              </div>

        </section>

  );
};

export default VideoSolutionVimeo;
