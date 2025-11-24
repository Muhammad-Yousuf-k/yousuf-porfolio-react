import React from 'react'

const SectionTop = (props) => {
    return (
        <div className=" w-full h-[20vh]  flex items-center justify-center">
            <div className='showCase-FadeIn-Up relative flex  items-center justify-center text-6xl sm:text-8xl md:sm:text-9xl'>
                <h1 className='stroke absolute opacity-50 text-[1em] text-center z-10'>{props.name}</h1>
                <h1 className='absolute text-[0.5em] text-center z-20 font-bold'>{props.name}</h1>
            </div>
        </div>
    )
}

export default SectionTop