import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NavLogo from "../assets/Hero_Section_Video/Overshoot_Media_Logo.jpg";

export const Footer = () => {
  return (

      <footer className="w-full  bg-[#f4f5f7] pt-20 pb-12 px-6 lg:px-30 2xl:px-90 text-[#0f1317]">

          {/* TOP GRID → Get started + Support */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* LEFT SIDE */}
            <div>

              <h2 className="text-3xl font-bold mb-4">Get started for free</h2>

              <div className="space-y-1 text-sm text-black *:font-semibold">
                <p>Pricing</p>
                <p>Contact Sales</p>
                <p>Watch Demos</p>
              </div>

               <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-[#3A3F47] transition cursor-pointer">
                Join <FiArrowRight />
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <h2 className="text-xl font-semibold mb-3">24/7 customer support</h2>

              <p className="text-gray-600 text-sm font-semibold leading-relaxed mb-7">
                Our customer support team is available to help 24/7. <br />
                Enterprise members also receive dedicated account <br />
                managers and a guaranteed uptime SLA.
              </p>

              <button className="bg-[#dfe4ea]  px-6 py-3 rounded-xl font-medium cursor-pointer flex items-center gap-2 shadow-sm hover:bg-gray-100 transition">
                Contact Support <span className="bg-white p-1 px-3 rounded-xs" ><FiArrowRight /></span>
              </button>
            </div>

          </div>

        

        {/* SOCIAL + LANGUAGE */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6  pt-8 text-sm">

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-gray-700 text-xl">
            <FaInstagram className="cursor-pointer hover:text-[#17d5ff]" />
            <FaXTwitter className="cursor-pointer hover:text-[#17d5ff]" />
            <FaFacebookF className="cursor-pointer hover:text-[#17d5ff]" />
            <FaLinkedinIn className="cursor-pointer hover:text-[#17d5ff]" />
          </div>

          {/* LANGUAGE SELECT */}
          <div className="flex items-center gap-3">
            <span className="text-gray-600">Language:</span>
            <select className="border rounded-md px-2 py-1 text-sm">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
            </select>
          </div>

        </div>

        {/* COPYRIGHT */}
        <p className="text-center text-gray-500 text-xs mt-10">
          © 2025 Vimeo.com, Inc. All rights reserved.
        </p>

        {/* BOTTOM LINKS */}
        <div className="flex flex-wrap justify-center gap-4 mt-2 text-gray-500 text-xs">
          <p>Terms</p>
          <p>Privacy</p>
          <p>U.S. State Privacy</p>
          <p>Copyright</p>
          <p>Cookies</p>
          <p>Accessibility</p>
        </div>

      </footer>

  );
};

