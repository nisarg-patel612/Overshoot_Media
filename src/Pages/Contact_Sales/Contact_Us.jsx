import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar";
import ReactCountryFlag from "react-country-flag";
import { FaArrowRight, FaCity } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { Footer } from "../../Components/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";



const COUNTRIES = [
  { code: "IN", dial: "+91", name: "India" },
  { code: "US", dial: "+1", name: "United States" },
  { code: "GB", dial: "+44", name: "United Kingdom" },
  { code: "AU", dial: "+61", name: "Australia" },
  { code: "CA", dial: "+1", name: "Canada" },
  { code: "DE", dial: "+49", name: "Germany" },
  { code: "FR", dial: "+33", name: "France" },
  { code: "AE", dial: "+971", name: "UAE" },
  { code: "SA", dial: "+966", name: "Saudi Arabia" },
  { code: "SG", dial: "+65", name: "Singapore" },
];

export const Contact_Us = () => {

  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(COUNTRIES[0]); 
  const [open, setOpen] = useState(false);
  const [companySizeOpen, setCompanySizeOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [roleOpen, setRoleOpen] = useState(false);



  return (
    <>

            <Navbar />

            {/* Contact Our Sales Section */}
            <section className="min-h-screen bg-linear-to-b from-black via-[#0b1116] to-black text-white pt-12 2xl:pt-32 pb-10  px-6">
                <div className="max-w-[1000px] 2xl:max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/*  LEFT (UNCHANGED)  */}
                    <div className="pt-30">
                        <h1 className="text-2xl sm:text-5xl md:text-3xl 2xl:text-4xl font-medium mb-6 " style={{ fontFamily: 'Roboto, sans-serif' }}>
                            {/* Talk to Our Sales  Team */}
                            Let's Create High-Impact Videos for Your Brand
                        </h1>

                        <p className="text-gray-300 max-w-xl mb-8 mt-8 flex gap-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
                            <span className="text-cyan-400">✔</span>
                            Let's build high-performing creator-led videos for your brand.
                        </p>

                        <p className="text-gray-300 max-w-xl mb-8 leading-normal tracking-wider flex gap-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
                            <span className="text-cyan-400">✔</span>
                            Connect with Overshoot Media’s sales team to discuss UGC, brand face videos, 
                            shorts & reels, and scalable video solutions tailored for your business.
                        </p>

                        <ul className="space-y-5 text-sm sm:text-base max-w-xl text-gray-300 leading-normal tracking-wider" style={{ fontFamily: 'Roboto, sans-serif' }}>
                            <li className="flex gap-3"><span className="text-cyan-400">✔</span>Access trained creators for UGC, brand face & explainer videos.</li>
                            <li className="flex gap-3"><span className="text-cyan-400">✔</span>Scale video production without hiring in-house creators.</li>
                            <li className="flex gap-3"><span className="text-cyan-400">✔</span>Consistent brand messaging across reels, ads & campaigns.</li>
                            <li className="flex gap-3"><span className="text-cyan-400">✔</span>Dedicated support for brands, agencies & growth teams.</li>
                            <li className="flex gap-3"><span className="text-cyan-400">✔</span>Regional & multilingual content (India + global markets).</li>
                        </ul>
                    </div>

                    {/*  RIGHT FORM  */}
                    <div className="bg-[#044d5d] text-gray-800 font-medium rounded-2xl p-8 shadow-xl" style={{ fontFamily: 'Roboto, sans-serif' }}>

                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <input className="input-ui" placeholder="First Name" />
                            <input className="input-ui" placeholder="Last Name" />
                            <input className="input-ui" placeholder="Business Email" />
                            <input className="input-ui" placeholder="Company Name" />
                            <input className="input-ui" placeholder="Country" />

                            {/* PHONE INPUT (DESIGN UNCHANGED) */}
                            <div className="relative h-[52px]">

                                {/* FLAG + CODE  */}
                                <button
                                    type="button"
                                    onClick={() => setOpen(!open)}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 
                                                flex items-center gap-2 cursor-pointer"
                                >
                                    <ReactCountryFlag
                                        svg
                                        countryCode={country.code}
                                        style={{ width: "1.4em", height: "1.4em" }}
                                    />
                                    <span className="text-sm text-gray-700 font-medium">
                                        {country.dial}
                                    </span>
                                </button>

                                {/* NUMBER INPUT */}
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Phone Number"
                                    className="w-full h-[52px] pl-22 pr-4 rounded-xl 
                                                bg-white text-black outline-none text-sm"
                                />

                                {/* COUNTRY DROPDOWN */}
                                {open && (
                                    <div className="absolute top-[60px] left-0 z-50 
                                                    bg-white text-black rounded-xl 
                                                    shadow-lg w-full max-h-60 overflow-y-auto">

                                        {COUNTRIES.map((c) => (
                                            <div
                                                key={c.code}
                                                onClick={() => {
                                                setCountry(c);
                                                setOpen(false);
                                                }}
                                                className="flex items-center gap-3 px-4 py-2 
                                                        hover:bg-gray-100 cursor-pointer"
                                            >
                                                <ReactCountryFlag
                                                    svg
                                                    countryCode={c.code}
                                                    style={{ width: "1.3em", height: "1.3em" }}
                                                />
                                                <span className="text-sm">{c.name}</span>
                                                <span className="ml-auto text-sm">{c.dial}</span>
                                            </div>
                                        ))}

                                    </div>
                                )}

                            </div>

                            
                            

                            {/* COMPANY SIZE SELECT */}
                            <div className="relative sm:col-span-2" style={{ fontFamily: 'Roboto, sans-serif' }}>

                                <select
                                    className="input-ui appearance-none pr-12 cursor-pointer"
                                    
                                    // Arrow toggle on click
                                    onMouseDown={() => setCompanySizeOpen(prev => !prev)}
                                    
                                    // Arrow reset when dropdown closes
                                    onBlur={() => setCompanySizeOpen(false)}
                                >
                                    <option value="">Company Size</option>
                                    <option>1–10</option>
                                    <option>11–50</option>
                                    <option>51–200</option>
                                    <option>201–500</option>
                                    <option>500+</option>
                                </select>

                                {/* ROTATING ARROW */}
                                <span
                                    className={`
                                    absolute right-4 top-1/2 -translate-y-1/2
                                    pointer-events-none
                                    transition-transform duration-300 ease-in-out
                                    ${companySizeOpen ? "rotate-180" : "rotate-0"}
                                    `}
                                >
                                    <MdKeyboardArrowDown size={22} className="text-gray-600" />
                                </span>

                            </div>


                            <div className="relative sm:col-span-2">
                                <select
                                    className="input-ui appearance-none pr-12 cursor-pointer"
                                    onMouseDown={() => setVideoOpen(prev => !prev)}
                                    onBlur={() => setVideoOpen(false)}
                                >
                                    <option>What are you looking to do with video?</option>
                                    <option>UGC / Testimonial Videos</option>
                                    <option>Brand Face Videos (Dedicated Creators)</option>
                                    <option>Shorts / Reels Production</option>
                                    <option>Explainer / Product Videos</option>
                                    <option>Regional / Multilingual Content</option>
                                    <option>Bulk Video Production</option>
                                    <option>Not sure yet (Need consultation)</option>
                                </select>

                                <span
                                    className={`absolute right-4 top-1/2 -translate-y-1/2 
                                    pointer-events-none transition-transform duration-300
                                    ${videoOpen ? "rotate-180" : "rotate-0"}`}
                                >
                                    <MdKeyboardArrowDown size={22} className="text-gray-600" />
                                </span>
                            </div>

                            <div className="relative sm:col-span-2">
                                <select
                                    className="input-ui appearance-none pr-12 cursor-pointer"
                                    onMouseDown={() => setRoleOpen(prev => !prev)}
                                    onBlur={() => setRoleOpen(false)}
                                >
                                    <option>Which option best describes your role?</option>
                                    <option>Founder / Co-Founder</option>
                                    <option>Marketing Manager</option>
                                    <option>Performance Marketer</option>
                                    <option>Brand Manager</option>
                                    <option>Agency / Consultant</option>
                                    <option>Content / Social Media Manager</option>
                                    <option>Other</option>
                                </select>

                                <span
                                    className={`absolute right-4 top-1/2 -translate-y-1/2 
                                    pointer-events-none transition-transform duration-300
                                    ${roleOpen ? "rotate-180" : "rotate-0"}`}
                                >
                                    <MdKeyboardArrowDown size={22} className="text-gray-600" />
                                </span>
                            </div>


                            <textarea
                                className="textarea-ui sm:col-span-2"
                                placeholder="Tell us about your Project, Campaign Goals, or Content Needs?"
                            />

                            <button className="sm:col-span-2 h-[52px] bg-black hover:bg-gray-700 text-xs sm:text-2xl md:text-base 2xl:text-xl
                                                text-white font-mono rounded-xl 
                                                flex items-center justify-center gap-1 cursor-pointer">
                                {/* Talk to Sales */}
                                Start Your Video Project
                                <span className=" px-3 py-1 rounded-md"><FaArrowRight /></span>
                            </button>

                        </form>
                    </div>

                </div>
            </section>


            {/*  Help Section  */}
            <section className="bg-white text-black py-24 px-6">

                    <div className="max-w-[1200px] mx-auto">

                        {/* TOP TITLE */}
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-20" style={{ fontFamily: 'Roboto, sans-serif' }}>
                            We’re here to help you
                        </h2>

                        {/* HELP OPTIONS */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-32">

                        {/* CARD 1 */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Accounts and billing</h3>
                            <button className="inline-flex items-center gap-3 text-sm font-semibold">
                                Get help
                            <span className="bg-black text-white p-2 rounded-md">
                                <FaArrowRight size={12} />
                            </span>
                            </button>
                        </div>

                        {/* CARD 2 */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Technical support</h3>
                            <button className="inline-flex items-center gap-3 text-sm font-semibold">
                                Get support
                            <span className="bg-black text-white p-2 rounded-md">
                                <FaArrowRight size={12} />
                            </span>
                            </button>
                        </div>

                        {/* CARD 3 */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6">Plans and pricing</h3>
                            <button className="inline-flex items-center gap-3 text-sm font-semibold">
                                See plans
                            <span className="bg-black text-white p-2 rounded-md">
                                <FaArrowRight size={12} />
                            </span>
                            </button>
                        </div>

                        </div>

                        {/* OFFICE LOCATIONS */}
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-20" style={{ fontFamily: 'Roboto, sans-serif' }}>
                            Office Locations
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-[900px] mx-auto" >

                        {/* LEFT COLUMN */}
                        <div className="space-y-10">

                            <div className="flex items-start gap-4">
                                <FaCity size={22} />
                                <span className="font-medium">Mumbai</span>
                            </div>

                            {/* <div className="flex items-start gap-4">
                                <HiOfficeBuilding size={22} />
                                <span className="font-medium">Sydney</span>
                            </div>

                            <div className="flex items-start gap-4">
                                <HiOfficeBuilding size={22} />
                                <span className="font-medium">Singapore</span>
                            </div> */}

                        </div>

                        {/* RIGHT COLUMN */}
                        {/* <div className="space-y-10">

                            <div className="flex items-start gap-4">
                                <HiOfficeBuilding size={22} />
                                <span className="font-medium">London</span>
                            </div>

                            <div className="flex items-start gap-4">
                                <HiOfficeBuilding size={22} />
                                <div className="text-sm leading-relaxed">
                                    <p className="font-medium mb-1">Tokyo</p>
                                    <p>WeWork Tokyo Square Garden</p>
                                    <p>14th Floor</p>
                                    <p>3-1-1 Kyobashi</p>
                                    <p>Chuo-ku, Tokyo</p>
                                    <p>Japan</p>
                                </div>
                            </div>

                        </div> */}

                        </div>

                    </div>

            </section>


            <section>
                <Footer />
            </section>

    </>
  );
};
