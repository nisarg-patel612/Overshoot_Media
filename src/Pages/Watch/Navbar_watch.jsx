import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegSmile, FaToggleOn } from "react-icons/fa";

const NavbarWatch = ({ toggleSidebar, sidebarOpen }) => {


    return (


          <section>

                {/* NAVBAR – hide only when sidebar is open */}
                {!sidebarOpen && (

                      <div className="w-full bg-[#f6f8fa] px-6 py-3 flex items-center justify-between sticky top-0 z-50">


                                {/* LEFT SIDE */}
                                <div className="flex items-center gap-4">

                                      {/* MENU ICON */}
                                      <button className="text-gray-700 text-xl" onClick={toggleSidebar} >
                                          ☰ 
                                      </button>

                                      {/* SEARCH BAR – Mobile me hide */}
                                      <div className="relative hidden md:block">

                                            <FiSearch className="absolute left-3 top-3 text-gray-400" />
                                            <input
                                              type="text"
                                              placeholder="Search all of Vimeo"
                                              className="bg-[#f3f3f3] pl-10 pr-4 py-2 w-80 rounded-full focus:outline-none"
                                            />

                                      </div>

                                </div>

                                {/* RIGHT SIDE */}
                                <div className="flex items-center gap-13 sm:gap-3 2xl:gap-7 text-sm  sm:text-sm 2xl:text-xl font-medium">


                                        {/* Pricing – only Desktop */}
                                        <button className="hover:text-black text-black hidden md:block">
                                            Pricing
                                        </button>


                                        <button className="hover:text-black text-black">
                                            Log in
                                        </button>


                                        <button className="bg-black text-white px-4 py-2 rounded-lg">
                                            Join
                                        </button>


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
