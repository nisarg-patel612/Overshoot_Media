import React from "react";
import NavLogo from "../../assets/Hero_Section_Video/Overshoot_Media_Logo.jpg";

export default function Footer_2() {
  return (
    
      <footer className="w-full bg-[#23313b] text-gray-300 py-16 px-6">
        <div className="max-w-8xl mx-auto">

          {/* TOP GRID */}
          <div className="grid grid-cols-1 sm:grid-cols -2 lg:grid-cols-4 gap-14">

            {/* LOGO */}
            <div>
              <img
                src={NavLogo}
                alt="Vimeo Logo"
                className="w-28 mb-6"
              />
            </div>

            {/* PRODUCT */}
            <div>
              <h4 className="text-sm text-gray-400 mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>Interactive Video</li>
                <li>Online Video Editor</li>
                <li>Auto Captioning</li>
                <li>Webinar Software</li>
                <li>Virtual Events</li>
                <li>Video Player</li>
                <li>Video Library</li>
                <li>Create Video Maker</li>
                <li>Live streaming</li>
                <li>Screen Recorder</li>
                <li>Video Privacy</li>
                <li>Video Collaboration</li>
                <li>Video Marketing</li>
                <li>OTT Video Monetization</li>
                <li>Video Analytics</li>
                <li>Video Hosting</li>
                <li>Hire Video Pros</li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h4 className="text-sm text-gray-400 mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Help Center</li>
                <li>Blog</li>
                <li>Our Customers</li>
                <li>Video School</li>
                <li>OTT Resources</li>
                <li>Developers</li>
                <li>Become a Partner</li>
                <li>Join Vimeo Experts</li>
                <li>Guidelines</li>
              </ul>
            </div>

            {/* APPS + VIMEO LINKS */}
            <div className="grid grid-cols-2 gap-10">
              {/* Apps */}
              <div>
                <h4 className="text-sm text-gray-400 mb-3">Apps</h4>
                <ul className="space-y-2 text-sm">
                  <li>Vimeo for macOS</li>
                  <li>Vimeo for iOS</li>
                  <li>Vimeo for Android</li>
                  <li>Vimeo Create for iOS</li>
                  <li>Vimeo Create for Android</li>
                  <li>Magisto</li>
                  <li>Vimeo for Shopify</li>
                  <li>Vimeo for Zoom</li>
                </ul>
              </div>

              {/* Vimeo */}
              <div>
                <h4 className="text-sm text-gray-400 mb-3">Vimeo</h4>
                <ul className="space-y-2 text-sm">
                  <li>Pricing</li>
                  <li>Upload</li>
                  <li>Staff Picks</li>
                  <li>On Demand</li>
                  <li>Vimeo OTT</li>
                  <li>Site map</li>
                  <li>About</li>
                  <li>Investor Relations</li>
                  <li>Press</li>
                  <li>Jobs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-12 border-t border-gray-600/30 pt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">

            {/* COPYRIGHT */}
            <p className="text-xs text-gray-400">
              © 2025 Vimeo.com, Inc. All rights reserved.
              Terms | Privacy | U.S. State Privacy | Copyright | Cookies
            </p>

            {/* LANGUAGE SELECTOR */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">Language</span>
              <select className="bg-[#1d262d] border border-gray-500 rounded-md text-sm px-3 py-1 cursor-pointer">
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>
      </footer>

  );
}
