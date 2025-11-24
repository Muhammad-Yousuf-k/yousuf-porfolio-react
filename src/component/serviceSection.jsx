import React, { useEffect } from 'react'
import img from '../assets/about.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const serviceSection = () => {
    useEffect(() => {
        gsap.from(".service-FadeIn-Up", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#service", // container of all cards
                start: "top 80%",
                end: "bottom 20%",
                // markers: true,
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <div id='service' className='w-full h-[100vh] hidden'>
            {/* top */}
            <div className=" w-full h-[20vh]  flex items-center justify-center">
                <div className='service-FadeIn-Up relative flex  items-center justify-center text-6xl sm:text-8xl md:sm:text-9xl'>
                    <h1 className='stroke absolute opacity-50 text-[1em] text-center z-10'>Service</h1>
                    <h1 className='absolute text-[0.5em] text-center z-20 font-bold'>Service</h1>
                </div>
            </div>
            <div className="w-full  h-[80vh] flex items-center justify-center border flex-wrap overflow-y-scroll">
                {/* card */}
                <div className="service-FadeIn-Up mainCardBox group flex items-center">

                    <div className='w-75 h-100 rounded-4xl border-[var(--primary)] border overflow-hidden'>
                        <div className='h-[50%] bg-[var(--secondary)] overflow-hidden flex items-center justify-center'>
                            <img src={img} alt="" className="w-25 h-25 shadow-2xl rounded-full object-cover" />
                        </div>
                    </div>
                    <div className="border w-10 opacity-0 group-hover:opacity-100 group-hover:w-80 h-80 rounded-r transition-all"></div>
                </div>
                {/* card */}
                <div className="service-FadeIn-Up mainCardBox group flex items-center">

                    <div className='w-75 h-100 rounded-4xl border-[var(--primary)] border overflow-hidden'>
                        <div className='h-[50%] bg-[var(--secondary)] overflow-hidden flex items-center justify-center'>
                            <img src={img} alt="" className="w-25 h-25 shadow-2xl rounded-full object-cover" />
                        </div>
                    </div>
                    <div className="border w-10 opacity-0 group-hover:opacity-100 group-hover:w-80 h-80 rounded-r transition-all"></div>
                </div>
                {/* card */}
                <div className="service-FadeIn-Up mainCardBox group flex items-center">

                    <div className='w-75 h-100 rounded-4xl border-[var(--primary)] border overflow-hidden'>
                        <div className='h-[50%] bg-[var(--secondary)] overflow-hidden flex items-center justify-center'>
                            <img src={img} alt="" className="w-25 h-25 shadow-2xl rounded-full object-cover" />
                        </div>
                    </div>
                    <div className="border w-10 opacity-0 group-hover:opacity-100 group-hover:w-80 h-80 rounded-r transition-all"></div>
                </div>
                {/* card */}
                <div className="service-FadeIn-Up mainCardBox group flex items-center">

                    <div className='w-75 h-100 rounded-4xl border-[var(--primary)] border overflow-hidden'>
                        <div className='h-[50%] bg-[var(--secondary)] overflow-hidden flex items-center justify-center'>
                            <img src={img} alt="" className="w-25 h-25 shadow-2xl rounded-full object-cover" />
                        </div>
                    </div>
                    <div className="border w-10 opacity-0 group-hover:opacity-100 group-hover:w-80 h-80 rounded-r transition-all"></div>
                </div>
                {/* card */}
                <div className="service-FadeIn-Up mainCardBox group flex items-center">

                    <div className='w-75 h-100 rounded-4xl border-[var(--primary)] border overflow-hidden'>
                        <div className='h-[50%] bg-[var(--secondary)] overflow-hidden flex items-center justify-center'>
                            <img src={img} alt="" className="w-25 h-25 shadow-2xl rounded-full object-cover" />
                        </div>
                    </div>
                    <div className="border w-10 opacity-0 group-hover:opacity-100 group-hover:w-80 h-80 rounded-r transition-all"></div>
                </div>
                {/* card */}
                <div className="service-FadeIn-Up mainCardBox group flex items-center">

                    <div className='w-75 h-100 rounded-4xl border-[var(--primary)] border overflow-hidden'>
                        <div className='h-[50%] bg-[var(--secondary)] overflow-hidden flex items-center justify-center'>
                            <img src={img} alt="" className="w-25 h-25 shadow-2xl rounded-full object-cover" />
                        </div>
                    </div>
                    <div className="border w-10 opacity-0 group-hover:opacity-100 group-hover:w-80 h-80 rounded-r transition-all"></div>
                </div>
                {/* card */}
                <div className="service-FadeIn-Up mainCardBox group flex items-center">

                    <div className='w-75 h-100 rounded-4xl border-[var(--primary)] border overflow-hidden'>
                        <div className='h-[50%] bg-[var(--secondary)] overflow-hidden flex items-center justify-center'>
                            <img src={img} alt="" className="w-25 h-25 shadow-2xl rounded-full object-cover" />
                        </div>
                    </div>
                    <div className="border w-10 opacity-0 group-hover:opacity-100 group-hover:w-80 h-80 rounded-r transition-all"></div>
                </div>
            </div>
        </div>
    )
}

export default serviceSection