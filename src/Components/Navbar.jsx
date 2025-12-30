import React, { useEffect, useState } from 'react'
import NavLogo from "../assets/Hero_Section_Video/Overshoot_Media_Logo.jpg";
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const [open, setOpen] = useState(false);

    const [isSticky, setIsSticky] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();


    const isContactPage = location.pathname === '/contact-us';


    useEffect(() => {
        
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const handlwBackHome = () => {
        navigate('/');
    }

    
    
 
    return (

        <section className='max-w-[1500px] mx-auto px-4 2xl:px-12'>

                <nav className={`bg-white nav-top-border ${isContactPage ? "bg-transparent" : "bg-white nav-top-border"} `}>

                {/* <nav className={`nav-top-border transition-all duration-300
                    ${isSticky 
                        ? "backdrop-blur-xl bg-white/30 fixed top-0 left-0 w-full shadow-md" 
                        : "bg-transparent backdrop-blur-none"
                    }
                `}> */}


                    <div className='max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-12 '>

                            <div className="flex items-center justify-between h-18 2xl:h-20">

                                    {/* left logo */}
                                    <div className="flex items-center gap-6">
                                        
                                            <a href="#" className='flex items-center gap-3 w-30 sm:w-10 md:w-30 lg:w-34 2xl:w-34'>

                                                    {/* <svg width="62" height="22" viewBox="0 0 62 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                                        <path d="M5 12.4C4.2 13.9 3 14.6 1.5 14.6 0.7 14.6 0 14.3 0 13.7 0 13 0.7 12.6 1.5 12.6 3 12.6 4 11.3 4.8 9.8L6.8 5.1C7.4 3.9 8.4 2.8 10 2.8 11.8 2.8 13 4.2 13 5.8 13 7.4 12.3 8.9 11 10.6L9.8 12.2C8.9 13.5 7.8 14.3 6.2 14.3 5.2 14.3 4.4 13.9 3.9 13.3" fill="#0f172a"/>
                                                        <text x="22" y="15" fontFamily="Helvetica, Arial, sans-serif" fontWeight="700" fontSize="14" fill="#0f172a">vimeo</text>
                                                    </svg>     */}

                                                <img src={NavLogo} alt="Navbar_Logo" onClick={handlwBackHome}/>

                                            </a>


                                            <div className="hidden md:flex items-center space-x-8">

                                                    {/* <Link className="text-xl sm:text-xl md:text-2xl lg:text-base 2xl:text-xl text-black font-semibold hover:text-gray-500">Product</Link> */}
                                                    <Link className="text-xl text-black font-semibold lg:text-base 2xl:text-xl hover:text-gray-500" to={'/solutions'}>Solutions</Link>
                                                    {/* <Link className="text-xl text-black font-semibold lg:text-base 2xl:text-xl hover:text-gray-500">Learn</Link> */}
                                                    <Link className="text-xl text-black font-semibold lg:text-base 2xl:text-xl hover:text-gray-500" to={'/upgrade-plan'}>Pricing</Link>
                                                    <Link className="text-xl text-black font-semibold lg:text-base 2xl:text-xl hover:text-gray-500" to={'/watch'}>Watch</Link>
                                                    <Link className="text-xl text-black font-semibold lg:text-base hover:text-gray-500 2xl:text-xl" to={'/contact-us'}>Contact Sales</Link>
                                            </div>

                                            
                                            

                                    </div>

                                    {/* Right section */}
                                    <div className="flex items-center gap-4">

                                            {/* <div className="hidden md:flex  items-center gap-6">
                                                
                                                    
                                                    <Link href="#" className="text-xl text-black font-semibold lg:text-base hover:text-gray-500 2xl:text-xl "></Link> 

                                            </div> */}

                                            
                                            <a href="#" className='hidden sm:inline-flex items-center gap-3 bg-[#dfe4ea]  px-8 py-3 rounded-xl shadow-sm'>

                                                    <span className="text-xl text-black font-semibold hover:text-gray-500 lg:text-base 2xl:text-xl">Whatsapp</span>
                                                    <span className="inline-flex items-center justify-center w-10 h-7 bg-black rounded-md text-white">
                                                        <FaWhatsapp />
                                                    </span>

                                            </a>


                                            {/* Mobile Responsive */}
                                            <button onClick={() => setOpen(!open)} className='md:hidden inline-flex items-center justify-center p-2 rounded-md text text-gray-700 hover:bg-gray-700 focus:outline-none' aria-expanded={open}>

                                                    
                                                    {open ? (
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                                                        <path d="M6 18L18 6M6 6l12 12" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    ) : (
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                                                        <path d="M4 6h16M4 12h16M4 18h16" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    )}


                                            </button>


                                    </div>

                            </div>

                    </div>


                    {/* Mobile menu (collapsible) */}
                    {open && (

                        <div className="md:hidden border-t border-gray-100 pb-4 mt-2">


                            <div className="pt-3 space-y-2">


                                    {/* <Link className="block px-2 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded" href="#">Product</Link> */}
                                    <Link className="block px-2 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded" href="#" to={'/solutions'}>Solutions</Link>
                                    {/* <Link className="block px-2 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded" href="#">Learn</Link> */}
                                    <Link className="block px-2 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded" href="#" to={'/upgrade-plan'}>Pricing</Link>
                                    <Link className="block px-2 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded" href="#" to={'/watch'}>Watch</Link>
                                    <Link className="block px-2 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded" href="#" to={'/contact-us'}>Contact Sales</Link>
                                

                                    <div className="pt-2 border-t border-gray-100">
                                        
                                        
                                        <Link className="block px-2 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded" href="#"></Link>

                                        <a className="mt-2 inline-flex items-center justify-center w-full px-4 py-2 rounded-full border border-slate-200 shadow-sm bg-white">
                                        
                                                <span className="text-sm font-medium text-gray-900">Whatsapp</span>
                                                
                                                <span className="inline-flex items-center justify-center w-10 h-7 bg-black rounded-md text-white ml-2">
                                                    <FaWhatsapp />
                                                </span>

                                        </a>

                                        
                                    </div>
                            </div>

                            
                        </div>

                    )}


                </nav>

        </section>
        
    )
}
