import React from 'react';
// components files
import Navbar from './component/navbar'
import HeroSection from './component/heroSec/heroSection'
import Carusol from './component/carusol';
import AboutSection from './component/aboutSec/aboutSection'
import ServiceSection from './component/serviceSec/serviceSection'
import ShowCaseSection from './component/showCaseSec/showCaseSection'
import Testimonial from './component/testimonial/testimonial';
import ContactSection from './component/contactSec/contactSection'
import Footer from './component/footer';
// logic files




const App = () => {


  return (
    <>
      <main className='exo2'>
        <Navbar />
        <HeroSection />
        <Carusol />
        <AboutSection />
        <ServiceSection />
        <ShowCaseSection />
        <Testimonial />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default App;
