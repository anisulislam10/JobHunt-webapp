import React from 'react'
import Navbar from './shared/navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJob from './LatestJob'
import Footer from './shared/Footer'

function Home() {
    return (
        <div className='max-w-7xl mx-auto my-0'>
            <Navbar />
            <HeroSection/>
            <CategoryCarousel/>
            <LatestJob/>
            <Footer/>
        </div>
    )
}

export default Home