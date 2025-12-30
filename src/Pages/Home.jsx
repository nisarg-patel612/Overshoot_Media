import React from 'react'
import { Navbar } from '../Components/Navbar'
import Hero from '../Components/Hero'
import VideoStrategyPlatform from '../Components/VideoStrategyPlatform'
import VideoSolutionPlatform from '../Components/VideoSolutionPlatform'
import AIVideoFeatures from '../Components/AI_VideoFeatutes'
import EnterpriseSecurity from '../Components/EnterPriceSecurity'
import DiscoverLatest from '../Components/Discover_Latest.jsx'
import { Footer } from '../Components/Footer.jsx'
import { Greatest_Storytellers } from '../Components/Greatest_Storytellers.jsx'


const Home = () => {

    return (
        
        <div>
            
                <Navbar />

                <Hero />

                <VideoStrategyPlatform />

                <VideoSolutionPlatform />

                <AIVideoFeatures />

                <EnterpriseSecurity />

                <Greatest_Storytellers />

                <DiscoverLatest />

                <Footer />

        </div>

    )

}

export default Home