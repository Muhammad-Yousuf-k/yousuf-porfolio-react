import React, { useState } from 'react'
import renderIcons from '../assets/scripts/renderIcons'

const navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [DropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent navigation
    setDropdownOpen(!DropdownOpen);
  };

  return (
    <>
      <nav className='flex sm:flex-wrap justify-around items-center px-3 py-1 lg:h-[15vh] h-[10vh] xl:h-[10vh] w-full overflowhidden fixed bg-[var(--light)] z-50'>
        <div className='flex justify-center'>
          <h1 className='text-2xl sm:text-3xl font-bold text-nowrap'>Mohammad Yousuf<span className='text-[var(--secondary)] font-[900]'>.</span></h1>
        </div>
        <div className='hidden lg:block'>
          <ul className='flex gap-5 font-medium items-center'>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#hero">Home</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#about">About</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white group px-4 py-1 rounded relative'>
              <a className='flex items-center justify-center group' href="#service">Services <svg className='w-5 h-5 -rotate-90 group-hover:rotate-0 transition-transform duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d={renderIcons.dropdown} /></svg></a>
              <div className='bg-[var(--secondary)] absolute group-hover:block hidden'>
                <a href="#service">
                  <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>Logo design</h1>
                </a>
                <a href="#service">
                  <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>Web design</h1>
                </a>
                <a href="#service">
                  <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>App Development</h1>
                </a>
                <a href="#service">
                  <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>SEO</h1>
                </a>
                <a href="#service">
                  <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>Web Development</h1>
                </a>
              </div>
            </li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#showCase">My ShowCase</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#testimonial">Testimonials</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#contact">Contact me</a></li>
            <li className='px-4 py-1'><a href="#contact"><button className='bg-[var(--secondary)] hover:bg-[var(--primary)] active:scale-95 text-[var(--light)] text-1xl px-6 py-3 rounded'>Hire Me</button></a></li>
          </ul>
        </div>

        <li className='px-4 py-1 list-none lg:hidden'><button onClick={toggleMobileMenu} className='active:scale-95 text-black text-2xl px-6 py-3'><i className="fa-solid fa-bars"></i></button></li>
      </nav>


      {mobileMenuOpen && (
        <div id='pMenu' className="fixed z-40 w-full h-[100vh] bg-[var(--light)]">
          <ul className='flex flex-col gap-5 font-medium items-center'>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#hero">Home</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#about">About</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white group px-4 py-1 rounded relative'>
              <a className='flex items-center justify-center group' onClick={toggleDropdown}>Services</a>

              {DropdownOpen && (
                <div className='bg-[var(--secondary)] text-white absolute group-hover:block'>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>Logo design</h1>
                  </a>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>Web design</h1>
                  </a>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>App Development</h1>
                  </a>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>SEO</h1>
                  </a>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>Web Development</h1>
                  </a>
                </div>

              )}
            </li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#showCase">My ShowCase</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#testimonial">Testimonials</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#contact">Contact me</a></li>
            <li className='px-4 py-1'><a href="#contact"><button className='bg-[var(--secondary)] hover:bg-[var(--primary)] active:scale-95 text-[var(--light)] text-1xl px-6 py-3 rounded'>Hire Me</button></a></li>
          </ul>
        </div>
      )}

    </>
  )
}

export default navbar