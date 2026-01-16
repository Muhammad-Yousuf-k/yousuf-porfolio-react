import React from 'react'
import AboutImg from '../../assets/images/about.webp';

const aboutRight = () => {
    return (
        <div className=" w-1/2 xl:w-1/3 lg:w-1/2 items-center h-full p-5 md:flex">
            <img className='rounded about-FadeIn-r' src={AboutImg} alt="" />
        </div>
    )
}

export default aboutRight