import React from "react";
import { FiBarChart, FiChevronLeft } from "react-icons/fi";
import { FaHome, FaCompass, FaStar, FaLayerGroup, FaList, FaUsers, FaTv, FaBeer, FaBars} from "react-icons/fa";
import Watch_Logo from "../../assets/Hero_Section_Video/Overshoot_Media_Logo.jpg";
import { useNavigate } from "react-router-dom";




const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

      const navigate = useNavigate();

      const handleBackHome = () => {
        navigate("/");
      };

      return (


            <div className={`bg-[#f6f8fa] h-screen fixed top-0 left-0 transition-all duration-300 ${sidebarOpen ? "w-55" : "w-14"}`} >

                    {/* LOGO + CLOSE BUTTON */}
                    {/* <div className="flex items-center justify-between px-4 py-5"> */}
                            {/* <img src={Watch_Logo} className={`transition-all duration-300 cursor-pointer ${sidebarOpen ? "w-34" : "w-0"}`}onClick={handleBackHome} /> */}
                    
                    <div className="flex items-center justify-between px-4 py-5">

                            <button
                              onClick={() => setSidebarOpen(!sidebarOpen)}
                              className={`
                                text-gray-600
                                transition-all
                                duration-300
                                ${sidebarOpen ? "" : "mx-auto"}
                              `}
                            >
                              <FaBars
                                size={20}
                                className={`transition-transform duration-300 ${sidebarOpen ? "" : "rotate-180"}`}
                              />
                            </button>

                    </div>

                    {/* MENU LIST */}
                    <div className="mt-3 space-y-3 text-gray-700 text-sm font-medium">

                          <SidebarItem icon={<FaHome />} title="Back to home" open={sidebarOpen} onClick={handleBackHome} />
                          <SidebarItem icon={<FaBeer />} title="Feed" open={sidebarOpen} />
                          <SidebarItem icon={<FaCompass />} title="Explore" open={sidebarOpen} />
                          <SidebarItem icon={<FaStar />} title="Staff Picks" open={sidebarOpen} />
                          <SidebarItem icon={<FaLayerGroup />} title="Channels" open={sidebarOpen} />
                          <SidebarItem icon={<FaList />} title="Categories" open={sidebarOpen} />
                          <SidebarItem icon={<FaUsers />} title="Groups" open={sidebarOpen} />
                          <SidebarItem icon={<FaTv />} title="On Demand" open={sidebarOpen} />

                    </div>
                    
            </div>


      );

};

const SidebarItem = ({ icon, title, open, onClick }) => (
  <div className="flex items-center gap-4 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={onClick} >
    {icon}
    {open && <span>{title}</span>}
  </div>
);

export default Sidebar;
