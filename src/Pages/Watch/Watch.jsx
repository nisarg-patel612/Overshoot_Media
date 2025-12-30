import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import NavbarWatch from "./Navbar_watch";
import HeroSlider from "./Hero_slider";
import VideoGrid from "./Video_Grid";

export const Watch = () => {


  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 760) {
        setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, []);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="w-full flex bg-[#f6f8fa]">

      {/* SIDEBAR */}
      {/* <Sidebar sidebarOpen={sidebarOpen} /> */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* RIGHT PAGE SECTION */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-9"}`}>


        <div className={`transition-all duration-300 px-1 `}>
            {/* ${sidebarOpen ? "-ml-10" : "ml-12"} */}

            {/* NAVBAR */}
            <NavbarWatch  toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            {/* <NavbarWatch toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} /> */}

        </div>    

        {/* HERO BANNER WITH SLIDER CONTROLS */} 

        {/* ${sidebarOpen ? "-ml-6" : "ml-12"} */}
        <div className={`transition-all duration-300 px-2 `}>
          <HeroSlider />
        </div>

        {/* <div className={`${sidebarOpen && window.innerWidth < 768 ? "hidden" : ""}`}>
           <HeroSlider />
        </div> */}


        {/* VIDEO LIST SECTION */}
        {/* <div className="px-6 mt-10">
          <VideoGrid />
        </div> */}

        <div className={`transition-all duration-300 `}>
          {/* ${sidebarOpen ? "-ml-4" : "ml-12"} */}
          <VideoGrid />
      </div>


      </div>
    </div>
  );
};
