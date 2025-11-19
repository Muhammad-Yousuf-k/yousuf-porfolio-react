import React from 'react'
import heroImg001 from '../assets/001.png';
import heroImg002 from '../assets/002.png';

const heroSection = () => {
  return (
    <div className='flex justify-center h-[90vh] w-screen  '>
      {/* left */}
      <div className="w-full lg:w-1/2 xl:w-1/3  h-full flex flex-col items-center md:items-start justify-center gap-5 p-5 ">
        <div className='flex flex-col gap-5'>

          <h2 className='text-[var(--secondary)] text-left text-1xl  md:text-xl sm:text-3xl font-bold'>Hi There, I'm Yousuf</h2>
          <h1 className='font-bold text-6xl lg:text-8xl md:text-7xl sm:text-8xl '>MERN Stack <br /> Developer</h1>
        </div>
        <p>I am a passionate Full Stack Developer dedicated to building efficient and scalable web applications. I enjoy solving complex problems and turning ideas into functional, user-friendly solutions.</p>
        <div className='flex gap-8'>
          <button className='bg-[var(--secondary)] hover:bg-[var(--primary)] text-white text-1xl px-6 py-3 rounded'>Learn More</button>
          <button className='font-bold hover:text-[var(--secondary)]'>See Our Work <i class="fa-solid fa-arrow-right-long"></i></button>
        </div>

      </div>
      {/* right */}
      <div className=" w-1/2 xl:w-1/3 lg:w-1/2 flex items-center h-full p-5 hidden md:flex relative">
        <img className='absolute z-10 w-[90%] xl:w-[100%]' src={heroImg001} alt="" />
        <img className='absolute z-20 w-[90%] xl:w-[100%]' src={heroImg002} alt="" />
      </div>
    </div>
  )
}

export default heroSection