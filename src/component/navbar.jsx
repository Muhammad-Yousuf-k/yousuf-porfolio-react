import React from 'react'

const navbar = () => {
  return (
    <nav className='flex sm:flex-wrap justify-around items-center px-3 py-1 h-[10vh] w-full'>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-bold text-nowrap'>Mohammad Yousuf<span className='text-[var(--secondary)] font-[900]'>.</span></h1>
      </div>
      <div className='hidden md:block'>
        <ul className='flex gap-5 font-medium items-center'>
          <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#">Home</a></li>
          <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#">About</a></li>
          <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#">Services</a></li>
          <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#">My ShowCase</a></li>
          <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#">Contact me</a></li>
          <li className='px-4 py-1'><button className='bg-[var(--secondary)] hover:bg-[var(--primary)] text-white text-1xl px-6 py-3 rounded'>Hire Me</button></li>
        </ul>
      </div>
      <li className='px-4 py-1 sm:hidden'><button className='active:scale-95 text-black text-2xl px-6 py-3'><i class="fa-solid fa-bars"></i></button></li>
    </nav>
  )
}

export default navbar