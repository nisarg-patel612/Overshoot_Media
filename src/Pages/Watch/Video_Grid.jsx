import React from "react";
import { FaPlay } from "react-icons/fa";


import Thumb_1 from '../../assets/Greatest_Storytellers_Videos/Videos_Collections/A night under a sky full of shooting starsI’m not missing this… and neither should youI’m join.mp4';
import Thumb_2 from '../../assets/Greatest_Storytellers_Videos/Videos_Collections/A Gift from Us to You-With every purchase of ₹5,000 and above, receive a stunning pair of Silver.mp4';
import Thumb_3 from '../../assets/Greatest_Storytellers_Videos/Videos_Collections/AQMK973NQxjL1nnWBmjAxWzT0VQ7zgI52K5RV8YClcFU6VA3TG2_.mp4';
import Thumb_4 from '../../assets/Greatest_Storytellers_Videos/Videos_Collections/Can’t be here No worries .@tripbeetles.mp4';
import Thumb_5 from '../../assets/Greatest_Storytellers_Videos/Videos_Collections/dimpybhatiaa_reel.mp4';
import Thumb_6 from '../../assets/Greatest_Storytellers_Videos/Videos_Collections/Do you want to study in Germany & EuropeTired of confusing visa processes and endless paperwork .mp4';
import Thumb_7 from '../../assets/Greatest_Storytellers_Videos/Videos_Collections/GRWM for a lunch date!.mp4';
import Thumb_8 from '../../assets/Greatest_Storytellers_Videos/Videos_Collections/Skincare goals toh yeh hai.mp4';
import Thumb_9 from '../../assets/Greatest_Storytellers_Videos/Videos_Collections/Wake up. Cleanse up. Glow up..mp4';
import Thumb_10 from '../../assets/Greatest_Storytellers_Videos/Videos_Collections/You can’t plan these days but you can definitely plan what to wear on these days.mp4';

import Avatar_1 from '../../assets/Watch_Banner_Videos/Watch_Human_Curated_videos/Card_1_1.avif';
import Avatar_2 from '../../assets/Watch_Banner_Videos/Watch_Human_Curated_videos/Card_2_2.avif';
import Avatar_3 from '../../assets/Watch_Banner_Videos/Watch_Human_Curated_videos/Card_3_3.avif';
import Avatar_4 from '../../assets/Watch_Banner_Videos/Watch_Human_Curated_videos/Card_4_4.avif';
import Avatar_5 from '../../assets/Watch_Banner_Videos/Watch_Human_Curated_videos/Card_5_5.avif';
import Avatar_6 from '../../assets/Watch_Banner_Videos/Watch_Human_Curated_videos/Card_6_6.avif';
import Avatar_7 from '../../assets/Watch_Banner_Videos/Watch_Human_Curated_videos/Card_7_7.avif';
import Avatar_8 from '../../assets/Watch_Banner_Videos/Watch_Human_Curated_videos/Card_8_8.avif';
import Avatar_9 from '../../assets/Watch_Banner_Videos/Watch_Human_Curated_videos/Card_9_9.avif';
import Avatar_10 from '../../assets/Watch_Banner_Videos/Watch_Human_Curated_videos/Card_10_10.avif';


const videos = [
  { thumb: Thumb_1, title: "Lost Worm", author: "Birø Beach Damgård", views: "34 views", avatar: Avatar_1 },
  { thumb: Thumb_2, title: "Frank", author: "The New Yorker", views: "3.9K views", avatar: Avatar_2 },
  { thumb: Thumb_3, title: "Beatrix is Invisible", author: "Alex Farias", views: "16.9K views", avatar: Avatar_3 },
  { thumb: Thumb_4, title: `Rettergut – "What was I made for?"`, author: "Anja Giele", views: "18.4K views", avatar: Avatar_4 },
  { thumb: Thumb_5, title: "LIGHT CAN’T ESCAPE", author: "Tim Sharp", views: "298K views", avatar: Avatar_5 },
  { thumb: Thumb_6, title: "CHICO", author: "Manifest", views: "134K views", avatar: Avatar_6 },
  { thumb: Thumb_7, title: "We Were The Scenery", author: "Christopher Radcliff", views: "35.1K views", avatar: Avatar_7 },
  { thumb: Thumb_8, title: "Poreless", author: "Switchboard Magazine", views: "16K views", avatar: Avatar_8 },
  { thumb: Thumb_9, title: "Bots", author: "Rich Williamson", views: "58.1K views", avatar: Avatar_9 },
  { thumb: Thumb_10, title: "Arctic Alchemy", author: "Wild Confluence", views: "57.5K views", avatar: Avatar_10 },
];


export default function VideoGrid() {

  const [isFeaturedPlaying, setIsFeaturedPlaying] = React.useState(false);
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  
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

  return (

        <div className="w-full mt-10">

              <div className="max-w-[1400px] 2xl:max-w-[2400px] mx-auto px-4 lg:px-6 2xl:px-2">

                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-semibold">Watch human-curated Staff Picks</h2>
                      <button className="text-sm bg-[#e5e5e5] px-3 py-1 rounded-md font-medium">Follow</button>
                    </div>

                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">



                          {/*  LEFT FEATURED PLAYER (NO TEXT, NO BADGE) */}
                          <div
                            className="bg-black rounded-xl overflow-hidden relative group w-full h-[260px] sm:h-80 md:h-[360px] lg:h-[420px] xl:h-[410px]"
                            onClick={() => {

                            if (!isFeaturedPlaying && selectedVideo) {
                                setIsFeaturedPlaying(true);
                                setTimeout(() => {
                                    featuredRef.current.querySelector("video")?.play();
                                }, 50);
                                return;
                            }

                            if (isFeaturedPlaying) {
                                setIsFeaturedPlaying(false);
                            } else {
                                if (selectedVideo) {
                                    setIsFeaturedPlaying(true);
                                } else {
                                    setSelectedVideo(videos[4].thumb);
                                    setIsFeaturedPlaying(true);
                                }
                            }

                        }}


                          >

                            {/* If not playing → show extracted thumbnail */}
                            {!isFeaturedPlaying ? (
                              <img
                                src={
                                  selectedVideo
                                    ? thumbs[videos.findIndex(x => x.thumb === selectedVideo)]
                                    : thumbs[4]   
                                }
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <video
                                src={selectedVideo}
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                playsInline
                                controls
                                onPause={() => setIsFeaturedPlaying(false)}
                                onEnded={() => setIsFeaturedPlaying(false)}
                              />
                            )}

                          </div>




                          {/*  RIGHT SIDE VIDEO GRID */}
                          <div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 -ml-3">

                              {videos.map((v, i) => (
                                <div
                                  key={i}
                                  className="cursor-pointer"
                                  onClick={() => {
                                    setSelectedVideo(v.thumb);
                                    setIsFeaturedPlaying(true);
                                  }}
                                >

                                  <div className="relative">

                                    {/* ALWAYS STATIC THUMBNAIL */}
                                    <img
                                      src={thumbs[i]}
                                      className="w-full h-32 object-cover rounded-lg"
                                    />

                                  </div>

                                  <div className="mt-2">
                                    <h3 className="font-medium text-xs">{v.title}</h3>

                                    <div className="flex items-center gap-2 mt-1">
                                      <img src={v.avatar} className="w-5 h-5 rounded-full" />
                                      <p className="text-gray-500 text-xs">{v.author}</p>
                                    </div>

                                    <p className="text-gray-400 text-xs mt-1">{v.views}</p>
                                  </div>

                                </div>
                              ))}

                            </div>
                          </div>


                    </div>


              </div>

        </div>

  );
}
