import React, { useEffect, useRef } from 'react'
// import HeroLeft from './heroLeft';
import SectionLeft001 from '../../MUC/sectionLeft001';
import HeroRight from './heroRight';

import { gsap } from "gsap";

const heroSection = () => {

  useEffect(() => {

    gsap.from(".Hero-FadeIn-l", {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    });

    gsap.from(".Hero-FadeIn-Up", {
      y: 50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2
    });

    gsap.from(".Hero-FadeIn-Ap", {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2
    });

  }, []);





  return (
    <div id='hero' className='flex gap-2 flex-col-reverse md:flex-row justify-center h-[1000px] md:h-[100vh] w-[100wh] overflow-hidden  '>
      {/* <HeroLeft /> */}
      <SectionLeft001
        mainHead={<>MERN Stack <br /> Developer</>}
        subHead="Hi There, I'm Yousuf"
        para="I am a passionate Full Stack Developer dedicated to building efficient and scalable web applications. I enjoy solving complex problems and turning ideas into functional, user-friendly solutions."
        btn1="Learn More"
        btn2="See Our Work"
        btn1Link="#about"
        btn2Link="#showCase" />
      <HeroRight />
    </div>
  )
}

export default heroSection