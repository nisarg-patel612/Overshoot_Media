import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegSmile, FaToggleOn, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Watch_Logo from "../../assets/Hero_Section_Video/Overshoot_Media_Logo.jpg";

const NavbarWatch = ({ toggleSidebar, sidebarOpen }) => {

    const navigate = useNavigate();

    const handleChangeRoute = () => {
        navigate('/upgrade-plan');
    }

    const handleChangeSolution = () => {
        navigate('/solutions')
    }

     const handleChangeContact = () => {
        navigate('/contact-us')
    }

    const handleBackHome = () => {
        navigate("/");
      };
 

    return (


          <section>

                {/* NAVBAR – hide only when sidebar is open */}
                {!sidebarOpen && (

                      <div className="w-full bg-[#f6f8fa] px-6 py-3 flex items-center justify-between sticky top-0 z-50">


                                {/* LEFT SIDE */}
                                <div className="flex items-center gap-4">

                                      
                                      {/* <button className="text-gray-700 text-xl" onClick={toggleSidebar} >
                                          ☰ 
                                      </button> */}
                                      <img src={Watch_Logo} className={`transition-all  cursor-pointer w-35 sm:w-35 md:w-35 2xl:w-35`}onClick={handleBackHome} />

                                      
                                      {/* <div className="relative hidden md:block">

                                            <FiSearch className="absolute left-3 top-3 text-gray-400" />
                                            <input
                                              type="text"
                                              placeholder="Search all of Vimeo"
                                              className="bg-[#f3f3f3] pl-10 pr-4 py-2 w-80 rounded-full focus:outline-none"
                                            />

                                      </div> */}

                                </div>

                                {/* RIGHT SIDE */}
                                <div className="flex items-center gap-13 sm:gap-8 2xl:gap-10 text-sm  sm:text-base 2xl:text-xl font-medium">

                                        {/* Pricing – only Desktop */}
                                        <button className=" text-black hidden md:block cursor-pointer hover:text-gray-500" onClick={handleChangeSolution}>
                                            Solutions
                                        </button>


                                        {/* Pricing – only Desktop */}
                                        <button className=" text-black hidden md:block cursor-pointer hover:text-gray-500" onClick={handleChangeRoute} >
                                            Pricing
                                        </button>


                                        <button className="hover:text-gray-500 text-black cursor-pointer" onClick={handleChangeContact}>
                                            Contact Sales
                                        </button>


                                        <a href="#" className='hidden sm:inline-flex items-center gap-3 bg-[#dfe4ea]  px-8 py-3 rounded-xl shadow-sm'>
                                        
                                                <span className="text-xl text-black font-semibold hover:text-gray-500 lg:text-base 2xl:text-xl">Whatsapp</span>
                                                <span className="inline-flex items-center justify-center w-10 h-7 bg-black rounded-md text-white">
                                                    <FaWhatsapp />
                                                </span>

                                        </a>


                                        {/* Avatar – Only Mobile */}
                                        <div className="w-8 h-8 rounded-full bg-[#c7efff] flex items-center justify-center md:hidden">
                                            <FaRegSmile className="text-[#00aaff] text-lg" />
                                        </div>


                                </div>


                      </div>

                )}

          </section>


    );


};

export default NavbarWatch;
