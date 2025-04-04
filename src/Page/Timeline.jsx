import React from 'react';
import imgT from "../assets/Timee.jpg";

const Timeline = () => {
  return (
    <section id="timeline" className="w-full py-12 bg-black">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#eeba30] mb-6 md:mb-8'>
          Timeline
        </h1>
        <div className="w-full max-w-4xl px-4">
          <img 
            src={imgT} 
            alt="Hogwarts Events Timeline" 
            className="w-full h-auto rounded-lg shadow-lg border-2 border-[#eeba30]"
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;