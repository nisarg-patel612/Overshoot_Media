import React from 'react';
import card_1 from '../assets/Greatest_Storytellers_Videos/Videos_Collections/dimpybhatiaa_reel.mp4';
import card_2 from '../assets/Greatest_Storytellers_Videos/Videos_Collections/Skincare goals toh yeh hai.mp4';
import card_3 from '../assets/Greatest_Storytellers_Videos/Videos_Collections/Rate my GRWM look from.mp4';
import card_4 from '../assets/Greatest_Storytellers_Videos/Videos_Collections/Just one routine away from naturally.mp4';
import card_5 from '../assets/Greatest_Storytellers_Videos/Videos_Collections/GRWM for a lunch date!.mp4';
import card_6 from '../assets/Greatest_Storytellers_Videos/Videos_Collections/Okra Gel – Your all-in-one skin savior!✨ Apply on acne & pimples for clear, calm skin.mp4';

const VideoStrategyPlatform = () => {
    const cards = [
        {
            id: 1,
            videoTitle: "High Quality Hosting",
            title: "Host in high quality, ad-free",
            description: "Ensure your videos play in their highest resolution, always ad‑free. No competitor distractions or random suggestions here.",
            buttonText: "Learn about video hosting",
            buttonBg: "bg-[#28313a]",
            buttonTextColor: "text-white",
            videoSrc: card_1
        },
        {
            id: 2,
            videoTitle: "Advanced Analytics",
            title: "Collaborate with anyone",
            description: "Share cuts for review, get granular with time-coded comments, and manage version history in one organized library.",
            buttonText: "Explore analytics",
            buttonBg: "bg-[#28313a]",
            buttonTextColor: "text-white",
            videoSrc: card_2
        },
        {
            id: 3,
            videoTitle: "Secure Platform",
            title: "Embed anywhere",
            description: "Keep your content safe with advanced privacy controls, SSO integration, and custom permission settings.",
            buttonText: "See security features",
            buttonBg: "bg-[#28313a]",
            buttonTextColor: "text-white",
            videoSrc: card_3
        },
        {
            id: 4,
            videoTitle: "Live Streaming",
            title: "Keep videos secure",
            description: "Stream live events with professional quality. Interactive features and real-time engagement tools included.",
            buttonText: "Discover live streaming",
            buttonBg: "bg-[#28313a]",
            buttonTextColor: "text-white",
            videoSrc: card_4
        },
        {
            id: 5,
            videoTitle: "AI Features",
            title: "Sell your content",
            description: "Leverage AI for automatic captions, content recommendations, and intelligent video editing.",
            buttonText: "Try AI features",
            buttonBg: "bg-[#28313a]",
            buttonTextColor: "text-white",
            videoSrc: card_5
        },
        {
            id: 6,
            videoTitle: "Custom Solutions",
            title: "Stream live with confidence",
            description: "Get customized solutions that match your workflow and business requirements perfectly.",
            buttonText: "Request customization",
            buttonBg: "bg-[#28313a]",
            buttonTextColor: "text-white",
            videoSrc: card_6
        }
    ];

    return (
        <section className="relative w-full bg-[#141a20] text-white py-20 px-4 md:px-8 lg:px-16 xl:px-24">
            
            {/* Header Section */}
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-sans mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    The Platform that Powers your Video Strategy
                </h2>
            </div>

            {/* Cards Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                {cards.map((card) => (
                    <div 
                        key={card.id}
                        className="bg-[#141a20] rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl  group flex flex-col"
                    >
                        {/* Video Section with Autoplay */}
                        <div className="relative h-48 overflow-hidden bg-black">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <source src={card.videoSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            
                            {/* Video Title Overlay */}
                            <div className="absolute top-4 left-4  px-3 py-1 rounded-full">
                                {/* <span className="text-sm font-medium">{card.videoTitle}</span> */}
                            </div>
                            
                            {/* Play Icon Overlay (hidden by default, shows on hover) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6 md:p-8 grow flex flex-col">
                            <h3 className="text-xl md:text-xl font-semibold mb-4">
                                {card.title}
                            </h3>
                            
                            <p className="text-gray-500 mb-6 grow text-xs ">
                                {card.description}
                            </p>

                            {/* Button with Specific Background Color */}
                            <a
                                href="#"
                                className={`${card.buttonBg} ${card.buttonTextColor} font-semibold text-xs sm:text-base px-5 py-3 rounded-xl hover:opacity-90 transition-all w-full justify-center group/btn text-center flex items-center gap-2`}
                            >
                                <span>{card.buttonText}</span>
                                <svg 
                                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default VideoStrategyPlatform;