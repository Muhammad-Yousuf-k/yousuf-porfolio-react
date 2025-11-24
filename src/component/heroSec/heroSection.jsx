import React, { useEffect, useRef } from 'react'
import HeroLeft from './heroLeft';
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
  }, []);


  useEffect(() => {
    gsap.from(".Hero-FadeIn-Up", {
      y: 50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2
    });
  }, []);

  useEffect(() => {
    gsap.from(".Hero-FadeIn-Ap", {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2
    });
  }, []);




  return (
    <div id='hero' className='flex justify-center h-[100vh] w-screen  '>
      <HeroLeft />
      <HeroRight />
    </div>
  )
}

export default heroSection