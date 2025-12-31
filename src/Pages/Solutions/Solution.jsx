import React from 'react'
import { Navbar } from '../../Components/Navbar';
import Overshoot_Media_Img from '../../assets/Overshoot_Media_Solution_Img/Solution_Banner_Img.jpg';
import {Footer} from '../../Components/Footer';
import { services } from '../../DB/SolutionDB/Solution_DB';

export const Solution = () => {

    return (

        <>


              <section className='w-full ' >
                    <div>
                        <div>
                          <Navbar />
                        </div>
                    </div>
              </section>



              {/* Video Solution Hero Banner Section */}
              <section className='py-20 px-6 bg-[#f6f8fa]'>

                    <div className='max-w-[1500px] mx-auto'>


                          <h1 className='text-xl sm:text-4xl lg:text-5xl font-medium text-center mb-16' style={{ fontFamily: 'Roboto, sans-serif' }} >
                              Creator-Led Video Solutions 
                              <br />
                              <span className="text-[#17d5ff]">
                                  That Elevate Your Brand 
                              </span>
                          </h1>

                          <div className="flex justify-center items-center mb-16">
                              <div className=" w-full max-w-[1040px] 2xl:max-w-[1300px] h-[260px] sm:h-80 md:h-[380px] lg:h-95 2xl:h-120 overflow-hidden rounded-2xl relative">

                                    <img 
                                      src={Overshoot_Media_Img} 
                                      alt="Overshoot Solution" 
                                      className="absolute inset-0 w-full h-full object-cover object-[center_59%] scale-100 hover:scale-125 transition-transform duration-500"
                                    />

                              </div>
                          </div>


                    </div>

                    <div>
                        <h2 className='text-xl sm:text-4xl lg:text-5xl font-medium text-center text-black mb-14' style={{ fontFamily: 'inter, sans-serif' }}>
                              {/* Our Video Solutions That Drive Real Impact */}
                              Video Solutions Built for <br /> Modern Brands
                          </h2>
                    </div>


                    {/* Video Solution Cards */}
                    <div className=" max-w-[1050px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-4">


                          {services.map((service) => (
                            

                                <div key={service.id} className="bg-black/10 rounded-xl text-center shadow-sm">

                                    <div className="w-full h-[200px] sm:h-[220px]">
                                        
                                        <img src={service.image} alt={service.title} className='w-full h-full object-cover rounded-tl-2xl rounded-tr-2xl  '/>


                                    </div>

                                    <div className='p-6'>
                                        <h3 className='text-sm sm:text-sm md:text-lg 2xl:text-lg font-medium mb-7 2xl:mb-8 mt-7 text-white bg-black hover:bg-white hover:text-black p-2 rounded-full cursor-pointer'>
                                            {service.title}
                                        </h3>

                                        <p className="text-sm text-black font-medium mt-3 mb-3 px-1">
                                            {service.description}
                                        </p>
                                    </div>

                                </div>


                          ))}

                        

                    </div>
                    
              </section>
                          
              <section>
                  <Footer />
              </section>


        </> 

    )

}
