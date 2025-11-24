import React from 'react';
// components files
import Navbar from './component/navbar'
import HeroSection from './component/heroSec/heroSection'
import AboutSection from './component/aboutSec/aboutSection'
import ServiceSection from './component/serviceSection'
import ShowCaseSection from './component/showCaseSec/showCaseSection'
import Footer from './component/footer';
// logic files




const App = () => {


  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <ShowCaseSection />
        <Footer />
      </main>
    </>
  );
};

export default App;
