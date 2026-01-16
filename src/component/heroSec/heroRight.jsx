import React from 'react'
import heroImg001 from '../../assets/images/hero001.webp';
import heroImg002 from '../../assets/images/hero002.png';

const heroRight = () => {
  return (
    <div className=" w-full md:w-1/2 xl:w-1/3 lg:w-1/2 flex items-center h-full p-5  md:flex relative">
      <img className='Hero-FadeIn-Ap heroimg absolute z-10 w-[90%] xl:w-[100%]' src={heroImg001} alt="" />
      <img className='Hero-FadeIn-Up absolute z-20 w-[90%] xl:w-[100%]' src={heroImg002} alt="" />
    </div>
  )
}


export default heroRight