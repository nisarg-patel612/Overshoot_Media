// import React from "react";
// import { FaArrowRight, FaPlay } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// import Video1 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/A Gift from Us to You-With every purchase of ₹5,000 and above, receive a stunning pair of Silver.mp4";
// import Video2 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/A night under a sky full of shooting starsI’m not missing this… and neither should youI’m join.mp4";
// import Video3 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/A sparkle that celebrates every story.mp4";
// import Video4 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/AQMK973NQxjL1nnWBmjAxWzT0VQ7zgI52K5RV8YClcFU6VA3TG2_.mp4";
// import Video5 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/Can’t be here No worries .@tripbeetles.mp4";
// import Video6 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/dimpybhatiaa_reel.mp4";
// import Video7 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/Do you want to study in Germany & EuropeTired of confusing visa processes and endless paperwork .mp4";
// import Video8 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/Getting flooded with leads that never convertWedding Planners and Event Managers across India.mp4";
// import Video9 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/GRWM for a lunch date!.mp4";
// import Video10 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/Just one routine away from naturally.mp4";
// import Video11 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/Okra Gel – Your all-in-one skin savior!✨ Apply on acne & pimples for clear, calm skin.mp4";
// import Video12 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/One spray. One story..mp4";
// import Video13 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/Plavi_Jain.mp4";
// import Video14 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/Rate my GRWM look from.mp4";
// import Video15 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/REAL REVIEW - REAL RESULTS.mp4";
// import Video16 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/Skincare goals toh yeh hai.mp4";
// import Video17 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/Stepping into Christmas with Mint & Oak’s cozy collection christmas collection out now.mp4";
// import Video18 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/suhaaniibhatia_Reel.mp4";
// import Video19 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/Think it through.mp4";
// import Video20 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/Vidhusali_Reel.mp4";
// import Video21 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/Wake up. Cleanse up. Glow up..mp4";
// import Video22 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/Wearing AMBIQ by QAANI.mp4";
// import Video23 from "../assets/Greatest_Storytellers_Videos/Videos_Collections/You can’t plan these days but you can definitely plan what to wear on these days.mp4";


// export const Greatest_Storytellers = () => {

//     const [playingVideoId, setPlayingVideoId] = React.useState(null);
//     const swiperRef = React.useRef(null);

    
//     const [videoThumbs, setVideoThumbs] = React.useState({});

//     const generateThumbnail = (id, videoSrc) => {
//         const video = document.createElement("video");
//         video.src = videoSrc;
//         video.crossOrigin = "anonymous";

//         video.addEventListener("loadeddata", () => {
//             video.currentTime = 0;

//             video.addEventListener("seeked", () => {
//                 const canvas = document.createElement("canvas");
//                 canvas.width = 400;
//                 canvas.height = 400;
//                 const ctx = canvas.getContext("2d");

//                 ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//                 const imageURL = canvas.toDataURL("image/png");

//                 setVideoThumbs((prev) => ({
//                     ...prev,
//                     [id]: imageURL
//                 }));
//             });
//         });
//     };

    

//     const reelHeight = "h-[420px] sm:h-[480px] md:h-[520px] lg:h-[470px] 2xl:h-[600px]";

    
//     const videos = [
//         { id: 1, video: Video1 },
//         { id: 2, video: Video2 },
//         { id: 3, video: Video3 },
//         { id: 4, video: Video4 },
//         { id: 5, video: Video5 },
//         { id: 6, video: Video6 },
//         { id: 7, video: Video7 },
//         { id: 8, video: Video8 },
//         { id: 9, video: Video9 },
//         { id: 10, video: Video10 },
//         { id: 11, video: Video11 },
//         { id: 12, video: Video12 },
//         { id: 13, video: Video13 },
//         { id: 14, video: Video14 },
//         { id: 15, video: Video15 },
//         { id: 16, video: Video16 },
//         { id: 17, video: Video17 },
//         { id: 18, video: Video18 },
//         { id: 19, video: Video19 },
//         { id: 20, video: Video20 },
//         { id: 21, video: Video21 },
//         { id: 22, video: Video22 },
//         { id: 23, video: Video23 }
//     ];

    
//     React.useEffect(() => {
//         videos.forEach(v => generateThumbnail(v.id, v.video));
//     }, []);

//     return (
//         <section className="w-full bg-[#11161D] text-white py-20 px-6 lg:px-20 2xl:px-40">

//             <div className="max-w-[1500px] mx-auto">
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-sans leading-tight" style={{ fontFamily: 'Roboto, sans-serif' }}>
//                     {/* Creators Community */}
//                     Where Creators Power Campaigns
//                 </h1>

//                 <p className="mt-6 text-base sm:text-lg md:text-xl text-[#9BA1A8] max-w-xl leading-relaxed">
//                     A collaborative creator community designed to produce scalable, brand-safe campaign videos—together.
//                 </p>

//                 <div className="mt-10">
//                     <button className="flex items-center gap-3 bg-[#2A2F36] hover:bg-[#3A3F47] transition-all px-6 py-3 rounded-full text-sm sm:text-base font-medium cursor-pointer ">
//                         {/* Discover Staff Picks <FaArrowRight /> */}
//                         Start Your Video Campaign <FaArrowRight />
//                     </button>
//                 </div>
//             </div>

//             <div className="mt-20 pb-10 -mx-6 lg:-mx-20 2xl:-mx-40">

//                 <Swiper
//                     modules={[Autoplay]}
//                     onSwiper={(s) => (swiperRef.current = s)}
//                     slidesPerView="auto"
//                     spaceBetween={25}
//                     autoplay={{ delay: 0, disableOnInteraction: false }}
//                     speed={5000}
//                     loop
//                     className="flex items-center"
//                 >

//                     {videos.map((v) => (
//                         <SwiperSlide key={v.id} className="w-auto!">

//                             {/* <div className={`group rounded-2xl overflow-hidden relative ${v.size} w-60 sm:w-[260px] md:w-[300px]`}> */}
//                             <div className={`group rounded-2xl overflow-hidden relative ${reelHeight} w-60 sm:w-[260px] md:w-[300px]`}>


//                                 {playingVideoId === v.id ? (
//                                     <video
//                                         src={v.video}
//                                         autoPlay
//                                         controls
//                                         className="w-full h-full object-cover relative z-10"
//                                         // onPause={() => swiperRef.current?.autoplay?.start()}
//                                         onPause={() => {
//                                             setPlayingVideoId(null);   
//                                             swiperRef.current?.autoplay?.start();
//                                         }}
//                                     />
//                                 ) : (
//                                     <img
//                                         src={videoThumbs[v.id]}
//                                         className="w-full h-full object-cover absolute inset-0 z-0"
//                                         alt="thumbnail"
//                                     />
//                                 )}

//                                 {/* <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-lg p-2 rounded-full text-white text-xs font-semibold border border-white/30 z-20 w-20">
//                                     <img src={Staff_Logo} alt="Staff_Logo" />
//                                 </div> */}

//                                 {playingVideoId !== v.id && (
//                                     <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-black z-30">

//                                         {/* <h3 className="text-lg font-semibold">{v.title}</h3>

//                                         <p className="mt-1 text-sm flex items-center gap-2">
//                                             <img src={v.avatar} className="w-5 h-5 rounded-full" alt="author" />
//                                             {v.author}
//                                         </p> */}

//                                         <div
//                                             className="w-15 h-10 bg-[#17d3fc] rounded-lg flex items-center justify-center"
//                                             onClick={() => {
//                                                 setPlayingVideoId(v.id);
//                                                 swiperRef.current?.autoplay?.stop();
//                                             }}
//                                         >
//                                             <FaPlay />
//                                         </div>
//                                     </div>
//                                 )}

//                             </div>

//                         </SwiperSlide>
//                     ))}

//                 </Swiper>
//             </div>
//         </section>
//     );
// };




import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { GreatestStoryTellersData } from "../DB/GreatestStoryTellers/GreatestStoryTellersData";

export const Greatest_Storytellers = () => {

  const [playingVideoId, setPlayingVideoId] = React.useState(null);
  const swiperRef = React.useRef(null);
  const [videoThumbs, setVideoThumbs] = React.useState({});

  const generateThumbnail = (id, videoSrc) => {
    const video = document.createElement("video");
    video.src = videoSrc;
    video.crossOrigin = "anonymous";

    video.addEventListener("loadeddata", () => {
      video.currentTime = 0;
      video.addEventListener("seeked", () => {
        const canvas = document.createElement("canvas");
        canvas.width = 400;
        canvas.height = 400;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        setVideoThumbs(prev => ({
          ...prev,
          [id]: canvas.toDataURL("image/png")
        }));
      });
    });
  };

  const reelHeight = "h-[420px] sm:h-[480px] md:h-[520px] lg:h-[470px] 2xl:h-[600px]";

  React.useEffect(() => {
    GreatestStoryTellersData.forEach(v =>
      generateThumbnail(v.id, v.video)
    );
  }, []);

  return (
    <section className="w-full bg-[#11161D] text-white py-20 px-6 lg:px-20 2xl:px-40">

      <div className="max-w-[1500px] mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-sans leading-tight">
          Where Creators Power Campaigns
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#9BA1A8] max-w-xl leading-relaxed">
          A collaborative creator community designed to produce scalable, brand-safe campaign videos—together.
        </p>

        <div className="mt-10">
          <button className="flex items-center gap-3 bg-[#2A2F36] hover:bg-[#3A3F47] transition-all px-6 py-3 rounded-full text-sm sm:text-base font-medium">
            Start Your Video Campaign <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="mt-20 pb-10 -mx-6 lg:-mx-20 2xl:-mx-40">

        <Swiper
          modules={[Autoplay]}
          onSwiper={(s) => (swiperRef.current = s)}
          slidesPerView="auto"
          spaceBetween={25}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={5000}
          loop
        >
          {GreatestStoryTellersData.map((v) => (
            <SwiperSlide key={v.id} className="w-auto!">
              <div className={`group rounded-2xl overflow-hidden relative ${reelHeight} w-60 sm:w-[260px] md:w-[300px]`}>

                {playingVideoId === v.id ? (
                  <video
                    src={v.video}
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                    onPause={() => {
                      setPlayingVideoId(null);
                      swiperRef.current?.autoplay?.start();
                    }}
                  />
                ) : (
                  <img
                    src={videoThumbs[v.id]}
                    className="w-full h-full object-cover absolute inset-0"
                    alt="thumbnail"
                  />
                )}

                {playingVideoId !== v.id && (
                  <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-30">
                    <div
                      className="w-15 h-10 bg-[#17d3fc] rounded-lg flex items-center justify-center"
                      onClick={() => {
                        setPlayingVideoId(v.id);
                        swiperRef.current?.autoplay?.stop();
                      }}
                    >
                      <FaPlay />
                    </div>
                  </div>
                )}

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
