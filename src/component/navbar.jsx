import React from 'react'

const navbar = () => {
  return (
    <>
      <nav className='flex sm:flex-wrap justify-around items-center px-3 py-1 h-[10vh] w-full overflow-hidden fixed bg-white z-50'>
        <div className='flex justify-center'>
          <h1 className='text-2xl sm:text-3xl font-bold text-nowrap'>Mohammad Yousuf<span className='text-[var(--secondary)] font-[900]'>.</span></h1>
        </div>
        <div className='hidden md:block'>
          <ul className='flex gap-5 font-medium items-center'>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#hero">Home</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#about">About</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#">Services</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#showCase">My ShowCase</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#">Contact me</a></li>
            <li className='px-4 py-1'><button className='bg-[var(--secondary)] hover:bg-[var(--primary)] active:scale-95 text-white text-1xl px-6 py-3 rounded'>Hire Me</button></li>
          </ul>
        </div>
        <li className='px-4 py-1 sm:hidden'><button onClick={() => {
          let pMenu = document.getElementById("pMenu")
          if (pMenu.classList.contains("hidden")) {
            pMenu.classList.remove("hidden")
          } else {
            pMenu.classList.add("hidden")

          }
        }} className='active:scale-95 text-black text-2xl px-6 py-3'><i className="fa-solid fa-bars"></i></button></li>
      </nav>
      <div id='pMenu' className="fixed hidden z-40 w-full h-[100vh] bg-white">
        <ul className='flex flex-col gap-5 font-medium items-center'>
          <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#hero">Home</a></li>
          <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#about">About</a></li>
          <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#">Services</a></li>
          <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#showCase">My ShowCase</a></li>
          <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#">Contact me</a></li>
          <li className='px-4 py-1'><button className='bg-[var(--secondary)] hover:bg-[var(--primary)] active:scale-95 text-white text-1xl px-6 py-3 rounded'>Hire Me</button></li>
        </ul>
      </div>
    </>
  )
}

export default navbar