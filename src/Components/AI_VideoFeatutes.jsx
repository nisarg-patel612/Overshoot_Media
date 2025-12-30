import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import SampleVideo from "../assets/Next_Level_Videos/AI_Video_1.mp4";
import { FaMinus } from "react-icons/fa";


const AIVideoFeatures = () => {
  
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
      {
        title: "100+ trained creators",
        desc: "Work with a curated network of skilled creators who understand brand guidelines, storytelling, and campaign goals.",
        button: "Translate With AI",
      },
      {
        title: "Fast turnarounds",
        desc: "AI-assisted workflows and streamlined collaboration help us deliver videos quickly—without compromising quality.",
        button: "Find answers with AI",
      },
      {
        title: "Scalable creator videos",
        desc: "Need 5 videos or 500? Our creator ecosystem scales effortlessly to match your campaign size and timeline.",
        button: "Edit video by text",
      },
      {
        title: "Brand-safe content delivery",
        desc: "Every video follows strict brand, quality, and compliance standards—so your message stays consistent and safe.",
        button: "Auto-generate the details",
      },
  ];

  return (

      <section className="w-full bg-[#0f1317] text-white py-24 px-6 lg:px-20 2xl:px-90 flex flex-col lg:flex-row gap-16">

            {/* LEFT SECTION */}
            <div className="flex-1">

                  <h2 className="text-3xl sm:text-4xl lg:text-3xl font-sans leading-tight mb-10" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {/* ✨  AI that takes your videos to the next level  */}
                    ✨  Smarter tools. Stronger creators. Better campaigns. 
                  </h2>

                  <p className="text-gray-600 text-sm sm:text-lg mt-4 mb-4 font-medium">
                     We combine AI intelligence with a trusted creator community to deliver high-quality, brand-ready videos—faster and at scale.
                  </p>


                  <div className="space-y-8">

                    {items.map((item, index) => (
                      <div key={index} className="border-b border-[#2a2f35] pb-4 bg-[#192028] p-5 rounded-2xl">

                        {/* TITLE ROW */}
                        <div
                          className="flex justify-between items-center cursor-pointer py-2 "
                          onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                          <p className="text-lg font-semibold">{item.title}</p>

                          {openIndex === index ? (
                            <FaMinus className="text-xl" />
                          ) : (
                            <FiPlus className="text-xl" />
                          )}
                        </div>

                        {/* INLINE DESCRIPTION BELOW THE ITEM */}
                        <div
                          className={`transition-all duration-300 overflow-hidden  ${
                            openIndex === index ? "max-h-[200px] mt-3" : "max-h-0"
                          }`}
                        >
                          <p className="text-[#c9d1d9] text-sm leading-relaxed">
                            {item.desc}
                          </p>

                          {/* BOTTOM BUTTON */}
                          {/* <button className="mt-4 px-5 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
                            {item.button} →
                          </button> */}
                        </div>

                      </div>
                    ))}

                  </div>

            </div>

            {/* RIGHT SIDE VIDEO SECTION */}
            <div className="flex-1 flex justify-center">

                  <div className="rounded-3xl shadow-xl p-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">


                        {/* RESPONSIVE 16:9 VIDEO */}
                        <div className="w-full aspect-video rounded-2xl overflow-hidden">
                          

                              <video
                                src={SampleVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-2xl"
                              />


                        </div>


                  </div>

            </div>

      </section>

  );
  
};

export default AIVideoFeatures;
