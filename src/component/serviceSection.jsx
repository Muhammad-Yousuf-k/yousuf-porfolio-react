import React from 'react'

const serviceSection = () => {
    return (
        <div className='w-screen h-[100vh]'>
            {/* top */}
            <div className=" w-full h-[20vh]  flex items-center justify-center">
                <div className='relative flex  items-center justify-center text-9xl'>
                    <h1 className='stroke absolute opacity-50 text-[1.2em] text-center z-10'>ShowCase</h1>
                    <h1 className='absolute text-[0.5em] text-center z-20 font-bold'>ShowCase</h1>
                </div>
            </div>
            {/* middle */}
            <div className="border-1 w-full h-[20vh] flex justify-around items-center">
                <div className=" text-2xl h-[50%] rounded w-1/4 flex items-center justify-center bg-[var(--secondary)] hover:bg-[var(--primary)] text-white">Project</div>
                <div className=" text-2xl h-[50%] rounded w-1/4 flex items-center justify-center bg-[var(--secondary)] hover:bg-[var(--primary)] text-white">Certificate</div>
                <div className=" text-2xl h-[50%] rounded w-1/4 flex items-center justify-center bg-[var(--secondary)] hover:bg-[var(--primary)] text-white">Tech Stack</div>
            </div>
            {/* bottom */}
            <div className=""></div>
        </div>
    )
}

export default serviceSection