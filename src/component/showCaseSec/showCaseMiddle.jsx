import React from 'react'

const showCaseMiddle = () => {
    return (
        <div className=" w-full h-[20vh] flex justify-evenly items-center">
            <div onClick={() => {
                let proj = document.getElementById("proj")
                let certificate = document.getElementById("certificate")
                let techStack = document.getElementById("techStack")
                certificate.classList.add("hidden")
                techStack.classList.add("hidden")
                if (proj.classList.contains("hidden")) {
                    proj.classList.remove("hidden")

                }

            }} className="showCase-FadeIn-Ap text-xl px-2 sm:text-2xl cursor-pointer active:scale-95 text-nowrap h-[50%] rounded sm:w-1/4 flex items-center justify-center bg-[var(--secondary)] hover:bg-[var(--primary)] text-[var(--light)]">Project</div>
            <div onClick={() => {
                let proj = document.getElementById("proj")
                let certificate = document.getElementById("certificate")
                let techStack = document.getElementById("techStack")
                proj.classList.add("hidden")
                techStack.classList.add("hidden")
                if (certificate.classList.contains("hidden")) {
                    certificate.classList.remove("hidden")

                }

            }} className="showCase-FadeIn-Ap text-xl px-2 sm:text-2xl cursor-pointer active:scale-95 text-nowrap h-[50%] rounded sm:w-1/4 flex items-center justify-center bg-[var(--secondary)] hover:bg-[var(--primary)] text-[var(--light)]">Certificate</div>
            <div onClick={() => {
                let proj = document.getElementById("proj")      
                let certificate = document.getElementById("certificate")
                let techStack = document.getElementById("techStack")
                certificate.classList.add("hidden")
                proj.classList.add("hidden")
                if (techStack.classList.contains("hidden")) {
                    techStack.classList.remove("hidden")

                }

            }} className="showCase-FadeIn-Ap text-xl px-2 sm:text-2xl cursor-pointer active:scale-95 text-nowrap h-[50%] rounded sm:w-1/4 flex items-center justify-center bg-[var(--secondary)] hover:bg-[var(--primary)] text-[var(--light)]">Tech Stack</div>
        </div>
    )
}

export default showCaseMiddle