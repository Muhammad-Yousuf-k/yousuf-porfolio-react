import React from 'react'
import Card from '../../assets/scripts/card'

const showCaseBottom = () => {


    return (
        <>

            <div id='proj' className=" w-screen h-[60vh]">
                <div className="w-full h-full p-5 overflow-y-scroll justify-center gap-3 flex flex-wrap">
                    {/* card */}
                    {Card.projData.map((e, idx) => {

                        return <div className="showCase-FadeIn-Up w-90 h-100 rounded-4xl border-gray-500 border  " key={idx}>
                            {/* card top */}

                            <div className='w-full h-[40%] rounded-4xl'>
                                <img className='w-full h-full object-cover rounded-4xl' src={e.img} alt="" />
                            </div>
                            {/* card bottom */}
                            <div className='w-full h-[60%] p-1'>

                                <div className="w-full h-[25%]  flex items-center px-5">
                                    <h1 className='bg-[var(--secondary)] text-white px-3 py-1 rounded-2xl flex items-center'>{e.ProjStatus}</h1>
                                </div>
                                <div className="w-full h-[55%]  flex flex-col gap-2 justify-center px-5">
                                    <h1 className='flex text-3xl items-center justify-between'>{e.ProjName}<i className="fa-solid fa-arrow-right-long -rotate-25 hover:bg-[var(--secondary)] hover:text-white p-2 rounded-full"></i></h1>
                                    <p className='text-xl truncate'>{e.ProjDescription}</p>
                                </div>
                                <div className="w-full  h-[20%] flex gap-2 items-center px-5">
                                    {e.ProjStack.map((e, idx) => {
                                        return <h2 key={idx} className='bg-gray-500 text-white px-3 py-1 rounded-2xl flex items-center'>{e}</h2>

                                    })}
                                </div>
                            </div>
                        </div>

                    })}

                </div>
            </div>


            <div id='certificate' className="hidden w-screen h-[60vh]">
                <div className="w-full h-full p-5 overflow-y-scroll justify-center gap-3 flex flex-wrap">
                    {/* card */}
                    {Card.certificateData.map((e, idx) => {

                        return <div key={idx} className='w-70 h-80 rounded-2xl border p-3 shadow-2xl'>
                            <div className='flex justify-between items-center  h-[20%]'>
                                <img src={e.img} alt="" className="w-15 h-15 rounded-full border-[var(--primary)] border p-1" />
                                <h2 className='font-bold bg-[var(--primary)] text-white px-2 py-1 rounded'>{e.status}</h2>
                            </div>
                            <div className="h-[60%] flex flex-col justify-center items-start gap-2 border-b border-[var(--primary)]">
                                <h2 className='text font-light'>{e.instituteName}</h2>
                                <h1 className='font-bold text-[18px]'>{e.degreeName}</h1>
                                <h2 className='flex items-center gap-x-2'><span className='bg-gray-300 text-[13px] font-light px-2 py-[3px] rounded'>{e.startDate}</span><span className='bg-gray-300 text-[13px] font-light px-2 py-[3px] rounded'>{e.endDate}</span></h2>
                            </div>
                            <div className="h-[20%] flex justify-center items-center">
                                <button className=' active:scale-95 bg-[var(--secondary)] hover:bg-[var(--primary)] text-white py-2 rounded cursor-pointer w-full'>Learn More</button>

                            </div>
                        </div>

                    })}


                </div>
            </div>


            <div id='techStack' className="hidden w-screen h-[60vh]">
                <div className="w-full h-full p-5 overflow-y-scroll justify-center gap-3 flex flex-wrap">
                    {/* card */}

                    <h1>TechStack</h1>

                </div>
            </div>



        </>
    )
}

export default showCaseBottom