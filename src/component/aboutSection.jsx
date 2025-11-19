import React from 'react'
import heroImg1 from '../assets/about.png';

const aboutSection = () => {
    return (
        <div className='flex justify-center items-center flex-col-reverse md:flex-row w-screen  md:h-screen'>
            {/* left */}
            <div className="w-full lg:w-1/2 xl:w-1/3  h-full flex flex-col items-center md:items-start justify-center gap-5 p-5 ">

                <div className='flex flex-col gap-5'>
                    <h2 className='text-[var(--secondary)] text-left  text-1xl  md:text-xl sm:text-3xl font-bold'>Building Digital Experiences</h2>
                    <h1 className='font-bold text-7xl lg:text-9xl md:text-8xl sm:text-9xl '>About Me</h1>
                </div>
                <p>Hello, I'm Muhammad Yousuf Khan, a passionate web developer and designer dedicated to transforming ideas into intuitive, visually stunning digital experiences. I specialize in both front-end and back-end development, creating responsive websites that not only look great but perform flawlessly. I thrive at the intersection of design and technology, delivering solutions that are creative, efficient, and impactful.</p>
                <div className='flex gap-8'>
                    <button className='bg-[var(--secondary)] hover:bg-[var(--primary)] text-white text-1xl px-6 py-3 rounded'>View Portfolio</button>
                    <button className='font-bold hover:text-[var(--secondary)]'>Contact Me <i class="fa-solid fa-arrow-right-long"></i></button>
                </div>

            </div>
            {/* right */}
            <div className=" w-1/2 xl:w-1/3 lg:w-1/2 items-center h-full p-5 md:flex">
                <img className='rounded' src={heroImg1} alt="" />
            </div>
        </div>
    )
}

export default aboutSection