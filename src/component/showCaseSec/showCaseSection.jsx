import React, { useEffect, useState } from 'react'
import SectionTop from '../../M-U-C/SectionTop'
import ShowCaseMiddle from './showCaseMiddle'
import ShowCaseBottom from './showCaseBottom'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {

    

    const [SecName, setSecName] = useState("ShowCase")

    useEffect(() => {
        gsap.from(".showCase-FadeIn-Up", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#showCase", // container of all cards
                start: "top 90%",
                end: "bottom 20%",
                // markers:true,
                toggleActions: "play none none none",
            },
        });
    }, []);

    useEffect(() => {
        gsap.from(".showCase-FadeIn-Ap", {
            opacity: 0,
            scale: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#showCase", // container of all cards
                start: "top 90%",
                end: "bottom 20%",
                // markers: true,
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <div id='showCase' className='w-screen h-[100vh]'>
            {/* top */}
            <SectionTop name={SecName} />
            {/* middle */}
            <ShowCaseMiddle />


            {/* bottom project */}
            <ShowCaseBottom />
           
        </div>
    )
}

export default ShowCaseSection