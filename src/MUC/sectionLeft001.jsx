import React from 'react';

const SectionLeft = ({ mainHead, subHead, para, btn1, btn2, btn1Link = "#", btn2Link = "#" }) => {
  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 h-full flex flex-col items-center md:items-start justify-center gap-5 p-5">
      <div className='flex flex-col gap-5'>
        <h2 className='Hero-FadeIn-l heroSubHead text-[var(--secondary)] text-left text-1xl md:text-xl sm:text-3xl font-bold'>{subHead}</h2>
        <h1 className='Hero-FadeIn-l heroHead font-bold text-6xl lg:text-8xl md:text-7xl sm:text-8xl'>{mainHead}</h1>
      </div>
      <p className='Hero-FadeIn-l heroPara'>{para}</p>
      <div className='Hero-FadeIn-l flex gap-8 heroBtnBox'>
        <a href={btn1Link}>
          <button className='active:scale-95 bg-[var(--secondary)] hover:bg-[var(--primary)] text-[var(--light)] text-1xl px-6 py-3 rounded cursor-pointer'>{btn1}</button>
        </a>
        <a className='flex items-center' href={btn2Link}>
          <button className='active:scale-95 font-bold hover:text-[var(--secondary)] cursor-pointer'>
            {btn2} <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default SectionLeft;
