import React from 'react'
import Navbar from './component/navbar'
import HeroSection from './component/heroSection'
import AboutSection from './component/aboutSection'
import ServiceSection from './component/serviceSection'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='overflow-hidden'>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      </main>
    </>
  )
}

export default App