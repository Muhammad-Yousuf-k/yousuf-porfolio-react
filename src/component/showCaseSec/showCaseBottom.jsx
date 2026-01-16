import React from 'react'
import Card from '../../assets/scripts/card'
import Cardimg from '../../../public/vite.svg'
import serviceIcon from '../../assets/scripts/card';

const showCaseBottom = () => {

    const { projData, certificateData, techStackData, frontendLogoService, backendLogoService, otherLogoService } = serviceIcon;


    return (
        <>

            <div id='proj' className=" w-[100wh]  flex justify-center overflow-hidden h-[60vh]">
                <div className="w-[90%] h-full p-5 overflow-y-scroll  scroll-none justify-center gap-3 flex flex-wrap">
                    {/* card */}
                    {Card.projData.map((e, idx) => {

                        return <div className="showCase-FadeIn-Up w-80 sm:w-90 h-100 rounded-4xl border-gray-500 border bg-white shadow-2xl  " key={idx}>
                            {/* card top */}

                            <div className='w-full h-[40%] border rounded-4xl'>
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

                        return <div key={idx} className='showCase-FadeIn-Up w-70 h-80 rounded-2xl border p-3 shadow-2xl'>
                            <div className="h-[50%] flex flex-col justify-start items-start gap-2 pt-[20px] border-[var(--primary)]">
                                <h1 className='font-bold text-3xl'>{e.degreeName}</h1>
                                <h2 className='text font-light text-xl'>{e.instituteName}</h2>
                                <h2 className='flex items-center gap-x-2'><span className='bg-gray-300 text-[13px] font-light px-2 py-[3px] rounded'>{e.startDate}</span><span className='bg-gray-300 text-[13px] font-light px-2 py-[3px] rounded'>{e.endDate}</span></h2>
                            </div>
                            <div className='flex justify-start items-center border-b  h-[30%]'>
                                <h2 className='font-bold bg-[var(--primary)] text-white px-2 py-1 rounded'>{e.status}</h2>
                            </div>
                            <div className="h-[20%] flex justify-center items-center">
                                <button className=' active:scale-95 bg-[var(--secondary)] hover:bg-[var(--primary)] text-white py-2 rounded cursor-pointer w-full'>Learn More</button>

                            </div>
                        </div>

                    })}


                </div>
            </div>


            <div id='techStack' className="hidden w-screen h-[60vh]">
                <div className="w-full h-full p-5 overflow-y-scroll justify-start items-center gap-4 flex flex-col lg:flex-row lg:flex-wrap lg:justify-center">
                    {/* card */}

                    <div className="left border w-[80%] lg:w-[40%] shrink-0 p-5 shadow-xl rounded">

                        <div className="top py-2 w-full flex justify-center  ">
                            <h1 className='text-5xl font-bold'>Frontend</h1>
                        </div>

                        <div className="bottom w-full flex flex-col gap-3 rounded">

                            {frontendLogoService.map((e, idx) => {
                                return <div key={idx} className="textBox flex items-center border rounded w-full h-[90px] px-2 ">
                                    <svg className='w-[70px] h-[70px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d={e.logo} /></svg>
                                    <div className='flex flex-col justify-center w-[100%]'>
                                        <h1 className='text-3xl font-bold'>{e.name}</h1>
                                        <p className='text-xl'>{e.level}</p>
                                        <div className='w-full bg-gray-400'>
                                            <div className={`prograss h-4 rounded w-[${e.prograss}] bg-[var(--secondary)]`}></div>
                                        </div>
                                    </div>
                                </div>
                            })}






                        </div>
                    </div>
                    <div className="left border w-[80%] lg:w-[40%] shrink-0 p-5 shadow-xl rounded">

                        <div className="top py-2 w-full flex justify-center  ">
                            <h1 className='text-5xl font-bold'>Backend</h1>
                        </div>

                        <div className="bottom w-full flex flex-col gap-3 rounded">

                            {backendLogoService.map((e, idx) => {
                                return <div key={idx} className="textBox flex items-center border rounded w-full h-[90px] px-2 ">
                                    <svg className='w-[70px] h-[70px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d={e.logo} /></svg>
                                    <div className='flex flex-col justify-center w-[100%]'>
                                        <h1 className='text-3xl font-bold'>{e.name}</h1>
                                        <p className='text-xl'>{e.level}</p>
                                        <div className='w-full bg-gray-400'>
                                            <div className={`prograss h-4 rounded w-[${e.prograss}] bg-[var(--secondary)]`}></div>
                                        </div>
                                    </div>
                                </div>
                            })}






                        </div>
                    </div>
                    <div className="left border w-[80%] lg:w-[40%] shrink-0 p-5 shadow-xl rounded">

                        <div className="top py-2 w-full flex justify-center  ">
                            <h1 className='text-5xl font-bold'>Other</h1>
                        </div>

                        <div className="bottom w-full flex flex-col gap-3 rounded">

                            {otherLogoService.map((e, idx) => {
                                return <div key={idx} className="textBox flex items-center border rounded w-full h-[90px] px-2 ">
                                    <svg className='w-[70px] h-[70px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d={e.logo} /></svg>
                                    <div className='flex flex-col justify-center w-[100%]'>
                                        <h1 className='text-3xl font-bold'>{e.name}</h1>
                                        <p className='text-xl'>{e.level}</p>
                                        <div className='w-full bg-gray-400'>
                                            <div className={`prograss h-4 rounded w-[${e.prograss}] bg-[var(--secondary)]`}></div>
                                        </div>
                                    </div>
                                </div>
                            })}






                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default showCaseBottom