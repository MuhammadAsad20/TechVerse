import React from 'react'
import HeroSection from '../sections/HeroSection'
import OurServiceSection from '../sections/OurServiceSection'
import TechnologiesSection from '../sections/TechnologiesSection'
import ProjectsSection from '../sections/ProjectsSection'

function Home() {
  return (
    <div>
        <HeroSection/>
        <OurServiceSection/>
        <TechnologiesSection/>
        <ProjectsSection/>
    </div>
  )
}

export default Home