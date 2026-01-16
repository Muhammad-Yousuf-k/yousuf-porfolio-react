import React from 'react'

const aboutLeft = () => {
    return (
        <div className="w-full lg:w-1/2 xl:w-1/3  h-full flex flex-col items-center md:items-start justify-center gap-5 p-5 ">

            <div className='flex flex-col gap-5'>
                <h2 className='about-FadeIn-l text-[var(--secondary)] text-left  text-1xl  md:text-xl sm:text-3xl font-bold'>Building Digital Experiences</h2>
                <h1 className='about-FadeIn-l font-bold text-7xl lg:text-9xl md:text-8xl sm:text-9xl '>About Me</h1>
            </div>
            <p className='about-FadeIn-l'>Hello, I'm Muhammad Yousuf Khan, a passionate web developer and designer dedicated to transforming ideas into intuitive, visually stunning digital experiences. I specialize in both front-end and back-end development, creating responsive websites that not only look great but perform flawlessly. I thrive at the intersection of design and technology, delivering solutions that are creative, efficient, and impactful.</p>
            <div className='flex gap-8 about-FadeIn-l'>
                <a href="#showCase">
                    <button className='active:scale-95 bg-[var(--secondary)] hover:bg-[var(--primary)] text-[var(--light)] text-1xl px-6 py-3 rounded cursor-pointer'>View Portfolio</button>
                </a>
                <a className='flex items-center' href="#contact">
                    <button className='active:scale-95 font-bold hover:text-[var(--secondary)] cursor-pointer'>Contact Me <i className="fa-solid fa-arrow-right-long"></i></button>
                </a>
            </div>

        </div>
    )
}

export default aboutLeft