import React from "react";
import { FiArrowRight } from "react-icons/fi";

// Dummy images — Replace with your real images
import ReleaseImg from "../assets/Discover_Img/Dis-1.avif";
import StreamingImg from "../assets/Discover_Img/Dis-2.avif";

const DiscoverLatest = () => {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-20 2xl:px-90">

      {/* HEADING */}
      <h2 className="text-center text-3xl md:text-4xl font-sans text-[#0f1317] mb-16" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Discover the Latest from Overshoot Media
      </h2>

      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* CARD 1 */}
        <div className="bg-[#f3f6fa] rounded-3xl p-10 flex flex-col items-center text-center shadow-sm">

          {/* NEW LABEL */}
          <span className="bg-[#17d4ff] text-black text-xs font-semibold px-3 py-1">
            New
          </span>

          <p className="text-gray-600 mt-4 max-w-xs">
            Explore our latest product releases and improvements.
          </p>

          {/* BUTTON */}
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl font-medium cursor-pointer flex items-center gap-2 hover:bg-[#111] transition">
            Learn more <FiArrowRight />
          </button>

          {/* IMAGE */}
          <img
            src={ReleaseImg}
            alt="Release"
            className="mt-10 rounded-2xl w-full max-w-md object-cover 2xl:mt-16"
          />
        </div>

        {/* CARD 2 */}
        <div className="bg-[#f3f6fa] rounded-3xl p-10 flex flex-col items-center text-center shadow-sm">

          {/* NEW LABEL */}
          <span className="bg-[#17d4ff] text-black text-xs font-semibold px-3 py-1 ">
            New
          </span>

          <p className="text-gray-600 mt-4 max-w-xs">
            Build and monetize your own video streaming service with Vimeo Streaming.
          </p>

          {/* BUTTON */}
          <button className="mt-6 bg-black text-white px-6 py-3 cursor-pointer rounded-xl font-medium flex items-center gap-2 hover:bg-[#111] transition">
            Learn more <FiArrowRight />
          </button>

          {/* IMAGE */}
          <img
            src={StreamingImg}
            alt="Streaming"
            className="mt-10 rounded-2xl w-full max-w-md object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default DiscoverLatest;
