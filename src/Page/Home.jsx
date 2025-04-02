import React, { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import bgImg from '../assets/hogwarts.png';
import Tpng from '../assets/home1.png';
import bgg from '../assets/bgg.gif';
import Countdown from 'react-countdown';

const Home = ({ id }) => {
  const targetDate = new Date('April 19, 2025 16:00:00').getTime();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yCounter = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yButtons = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-2xl sm:text-4xl font-bold text-[#eeba30] font-rye">The Event Has Begun!</span>;
    } else {
      return (
        <div className="text-center w-full px-2">
          <div className="flex justify-center">
            <h3 className="text-sm sm:text-xl w-full md:w-1/2 lg:w-1/2 bg-black/70 rounded-tl-2xl rounded-br-2xl border-[#eeba30] border-2 p-1 text-[#eeba30] font-bold mb-2 sm:mb-4 font-rye">
              Hogwarts Express Departing In:
            </h3>
          </div>
          <div className="flex gap-1 sm:gap-2 md:gap-4 justify-center flex-wrap">
            {['Days', 'Hours', 'Mins', 'Secs'].map((unit, index) => (
              <div 
                key={unit} 
                className="bg-black/70 p-1 sm:p-2 md:p-4 rounded-tl-2xl rounded-br-2xl border border-[#eeba30] min-w-[60px]"
              >
                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-[#eeba30] font-rye">
                  {[days, hours, minutes, seconds][index]}
                </div>
                <div className="text-xs sm:text-sm text-white font-rye">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <section 
      id={id} 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden font-rye"
    >
      {/* Dark stormy background layer */}
      <div 
        className="fixed inset-0 w-full h-full overflow-hidden"
        style={{
          background: `url(${bgg}) center/cover no-repeat`,
          zIndex: -2,
          opacity: 0.9,
        }}
      ></div>
      
      {/* Floating image layer */}
      <motion.div 
        className="fixed inset-0 w-full h-full flex items-start justify-center pt-[25%] md:pt-[10%] z-[-1]"
        style={{ y: yCounter }}
      >
        <img 
          src={Tpng} 
          alt="Harry Potter themed content" 
          className="max-w-[50%] sm:max-w-[60%] md:max-w-[25%] ml-5"
          style={{ 
            animation: 'float 3s ease-in-out infinite',
          }}
        />
      </motion.div>
      
      {/* Hogwarts castle background */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
          filter: 'brightness(0.8)',
          y: yBg
        }}
      ></motion.div>
      
      {/* Main content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col items-center justify-center px-2 sm:px-4 pt-[25%] sm:pt-[35%] md:pt-[10%]"
        style={{
          y: yCounter,
          opacity: opacityContent
        }}
      >
        <div className="w-full mt-4 sm:mt-8 px-2 sm:px-4">
          <Countdown date={targetDate} renderer={renderer} />
        </div>

        {/* Registration Section */}
        <motion.div 
          className="mt-4 sm:mt-8 md:mt-12 text-center w-full max-w-xs sm:max-w-md px-2 sm:px-4"
          style={{ y: yButtons }}
        >
          <div className="bg-black/80 rounded-tl-3xl rounded-br-3xl p-3 sm:p-6 backdrop-blur-sm space-y-2 sm:space-y-4 border border-[#eeba30]/30">
            <h3 className="text-lg sm:text-2xl font-bold text-[#eeba30] mb-2 sm:mb-4 font-rye">
              Join the Wizarding Community
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
              <button 
                className="bg-[#eeba30] hover:bg-[#d4a72c] text-[#1a0d00] font-bold py-2 sm:py-3 px-3 sm:px-6 rounded-tl-2xl rounded-br-2xl
                          transition-all duration-300 text-sm sm:text-lg flex-1 shadow-lg hover:shadow-[#eeba30]/50 font-rye"
              >
                Register Now
              </button>
              <button 
                className="bg-[#1a0d00] hover:bg-[#2a1800] text-[#eeba30] font-bold py-2 sm:py-3 px-3 sm:px-6 rounded-tl-2xl rounded-br-2xl
                          border-2 border-[#eeba30] transition-all duration-300 text-sm sm:text-lg flex-1 hover:shadow-[#eeba30]/30 font-rye"
              >
                Join Community
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;