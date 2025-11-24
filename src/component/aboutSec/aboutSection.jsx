import React, { useEffect } from 'react'
import AboutLeft from './aboutLeft';
import AboutRight from './aboutRight';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const aboutSection = () => {

    useEffect(() => {
        gsap.from(".about-FadeIn-l", {
            opacity: 0,
            x: -50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#about", // container of all cards
                start: "top 70%",
                end: "bottom 20%",
                // markers:true,
                toggleActions: "play none none none",
            },
        });
    }, []);

    useEffect(() => {
        gsap.from(".about-FadeIn-r", {
            opacity: 0,
            x: 50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#about", // container of all cards
                start: "top 70%",
                end: "bottom 20%",
                // markers:true,
                toggleActions: "play none none none",
            },
        });
    }, []);





    return (
        <div id='about' className='flex justify-center items-center flex-col-reverse md:flex-row w-screen  md:h-screen'>
            <AboutRight />
            <AboutLeft />
        </div>
    )
}

export default aboutSection