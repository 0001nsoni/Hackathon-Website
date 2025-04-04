import React, { useRef, useState, useEffect } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import bgImg from '../assets/hogwarts-min.png';
import Tpng from '../assets/main.png';
import bgg from '../assets/bg2.gif';
import Countdown from 'react-countdown';
import hogwartsExpress from '../assets/hogwarts-express.gif';

const Home = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [errorLoading, setErrorLoading] = useState(false);
  const targetDate = new Date('April 19, 2025 16:00:00').getTime();
  const containerRef = useRef(null);
  
  // Check if all assets are loaded
  useEffect(() => {
    const images = [bgImg, Tpng, bgg]; // Removed undefined 'paper' variable
    let loadedCount = 0;
    let errored = false;
    
    const handleImageLoad = () => {
      if (!errored) {
        loadedCount++;
        const progress = Math.floor((loadedCount / images.length) * 100);
        setLoadingProgress(progress);
        
        if (loadedCount === images.length) {
          setTimeout(() => setIsLoading(false), 500);
        }
      }
    };

    const handleImageError = (src) => {
      console.error(`Failed to load image: ${src}`);
      errored = true;
      setErrorLoading(true);
      handleImageLoad();
    };

    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = () => handleImageError(src);
    });

    const timeout = setTimeout(() => {
      if (isLoading) {
        console.warn('Loading timeout reached, continuing anyway');
        setErrorLoading(true);
        setIsLoading(false);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

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
          <div className="flex justify-center flex-wrap">
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

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
        <img 
          src={hogwartsExpress} 
          alt="Hogwarts Express loading" 
          className="w-64 h-64 object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '';
          }}
        />
        <div className="mt-8 text-center w-64 sm:w-80">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#eeba30] font-rye mb-4">
            {errorLoading ? 'Magical Journey Preparing...' : 'The Hogwarts Express is arriving...'}
          </h2>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-[#eeba30] h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="text-white mt-4 font-rye">
            {errorLoading ? 'Some magical elements took longer than expected...' : 'Preparing your magical journey...'}
          </p>
        </div>
      </div>
    );
  }

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
          background: bgg ? `url(${bgg}) center/cover no-repeat` : '#0a0a0a',
          zIndex: -2,
          opacity: 1,
        }}
      ></div>
      
      {/* Floating image layer */}
      {Tpng && (
        <motion.div 
          className="fixed inset-0 w-full h-full flex items-start justify-center pt-[25%] md:pt-[3%] z-[-1]"
          style={{ y: yCounter }}
        >
          <img 
            src={Tpng} 
            alt="Harry Potter themed content" 
            className="max-w-[60%] sm:max-w-[70%] md:max-w-[30%] ml-5"
            style={{ 
              animation: 'float 3s ease-in-out infinite',
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </motion.div>
      )}
      
      {/* Hogwarts castle background */}
      <motion.div 
  className="absolute top-0 left-0 w-full h-full"
  style={{
    backgroundImage: bgImg ? `url(${bgImg})` : 'linear-gradient(to bottom, #000000, #1a0d00)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.9,
    filter: 'brightness(0.8)',
    y: yBg
  }}
>
  <div
    className="absolute top-170 inset-0 w-full h-[30%]"
    style={{
      background: 'linear-gradient(0deg, rgba(0,0,0,1) 55%, rgba(88,84,205,0) 100%)'
    }}
  ></div>
</motion.div>
      
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