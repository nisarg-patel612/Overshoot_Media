import React from "react";
import { FaPlay } from "react-icons/fa";
import { videos } from "../../DB/VideoGridDB/Video_Grid";


export default function VideoGrid() {

  const [isFeaturedPlaying, setIsFeaturedPlaying] = React.useState(false);
  // const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [selectedVideo, setSelectedVideo] = React.useState(videos[0].thumb);


  
  const [thumbs, setThumbs] = React.useState({});

  
  const extractThumbnail = (id, videoSrc) => {
    const video = document.createElement("video");
    video.src = videoSrc;
    video.crossOrigin = "anonymous";

    video.addEventListener("loadeddata", () => {
      video.currentTime = 0;

      video.addEventListener("seeked", () => {
        const canvas = document.createElement("canvas");
        canvas.width = 400;
        canvas.height = 250;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imgURL = canvas.toDataURL("image/png");

        setThumbs(prev => ({ ...prev, [id]: imgURL }));
      });
    });
  };

  
  React.useEffect(() => {
    videos.forEach((v, index) => {
      extractThumbnail(index, v.thumb);
    });
  }, []);

  const videoRef = React.useRef(null);


  return (

        <div className="w-full mt-1">

              <div className="max-w-[1080px] 2xl:max-w-[1360px] mx-auto px-8 lg:px-6 2xl:px-7">


                    <div className="flex items-center gap-3">
                      <h2 className="text-sm sm:text-xl md:text-xl 2xl:text-xl font-semibold">Watch human-curated Staff Picks</h2>
                      {/* <button className="text-sm bg-[#e5e5e5] px-3 py-1 rounded-md font-medium">Follow</button> */}
                    </div>

                    {/* <div className="mt-6 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6"> */}
                    <div className=" mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-5 ">

                          {videos.map((v, i) => {

                                const isFeatured = i === 0;

                                return (

                                  <div key={i}className="cursor-pointer"
                                    onClick={() => {
                                      if (isFeatured) {
                                        if (videoRef.current) {
                                          if (videoRef.current.paused) {
                                            videoRef.current.play();
                                            setIsFeaturedPlaying(true);
                                          } else {
                                            videoRef.current.pause();
                                            setIsFeaturedPlaying(false);
                                          }
                                        }
                                      } else {
                                        setSelectedVideo(v.thumb); 
                                        setIsFeaturedPlaying(true); 
                                        setTimeout(() => {
                                          if (videoRef.current) {
                                            videoRef.current.load();
                                            videoRef.current.play();
                                          }
                                        }, 10);
                                      }
                                    }}
                                    >
                                          <div className=" relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black ">
                                          
                                                  {/* Image / Video */}
                                                  {isFeatured ? (
                                                      <>
                                                        
                                                        {!isFeaturedPlaying && (
                                                          <img
                                                            src={thumbs[i]}
                                                            className="absolute inset-0 w-full h-full object-cover z-10"
                                                          />
                                                        )}

                                                        <video
                                                          ref={videoRef}
                                                          src={selectedVideo} 
                                                          className="w-full h-full object-cover"
                                                          muted
                                                          playsInline
                                                          onPlay={() => setIsFeaturedPlaying(true)}
                                                          onPause={() => setIsFeaturedPlaying(false)}
                                                        />
                                                      </>
                                                    ) : (
                                                      <img src={thumbs[i]} className="w-full h-full  object-full" />
                                                  )}


                                                {/* Dark Gradient */}
                                                <div className="absolute inset-0 z-20 transition-colors duration-300 hover:bg-black/40" />


                                          </div>

                                  </div>
                                );

                          })}

                    </div>



              </div>

        </div>

  );
}

