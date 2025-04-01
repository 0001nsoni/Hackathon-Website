import React from 'react';
import bgImg from '../assets/hogwarts.png';
import Tpng from '../assets/home1.png';
import Countdown from 'react-countdown';

const Home = ({ id }) => {
  const targetDate = new Date('April 19, 2025 16:00:00').getTime();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-4xl font-bold text-[#eeba30]">The Event Has Begun!</span>;
    } else {
      return (
        <div className="text-center">
          <h3 className="text-xl bg-black/70 rounded-tl-2xl rounded-br-2xl border-[#eeba30] border-2 p-1 text-[#eeba30] font-bold mb-4">
            Hogwarts Express Departing In:
          </h3>
          <div className="flex gap-4 justify-center">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, index) => (
              <div key={unit} className="bg-black/70 p-4 rounded-tl-2xl rounded-br-2xl border border-[#eeba30]">
                <div className="text-4xl font-bold text-[#eeba30] font-serif">
                  {[days, hours, minutes, seconds][index]}
                </div>
                <div className="text-white font-serif">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <section id={id} className="relative h-screen w-full overflow-hidden">
      {/* Dark stormy background layer (deepest) */}
      <div 
        className="fixed inset-0 w-full h-full overflow-hidden"
        style={{
          background: "url('https://i.pinimg.com/originals/07/5b/18/075b18a0293f488015cc45e2d3c7e589.gif') center/cover no-repeat",
          zIndex: -2,
          opacity: 0.9,
        }}
      ></div>
      
      {/* Home1.png layer - responsive positioning */}
      <div className="fixed inset-0 w-full h-full flex items-start justify-center pt-[25%] md:pt-[10%] z-[-1]">
        <img 
          src={Tpng} 
          alt="Harry Potter themed content" 
          className="max-w-[60%] ml-5 md:max-w-[25%] lg:max-w-[25%]"
          style={{ 
            animation: 'float 3s ease-in-out infinite',
            transform: 'translateY(0) md:translateY(-20%)'
          }}
        />
      </div>
      
      {/* Hogwarts castle background (top) - will scroll */}
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
          filter: 'brightness(0.8)',
        }}
      ></div>
      
      {/* Main content - adjusted for mobile */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 pt-[40%] md:pt-[10%]">
        <div className="mt-8 px-4">
          <Countdown date={targetDate} renderer={renderer} />
        </div>

        {/* Registration Section */}
        <div className="mt-8 md:mt-12 text-center w-full max-w-md px-4">
          <div className="bg-black/80 rounded-tl-3xl rounded-br-3xl p-6 backdrop-blur-sm space-y-4 border border-[#eeba30]/30">
            <h3 className="text-2xl font-bold text-[#eeba30] mb-4 font-serif">
              Join the Wizarding Community
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-[#eeba30] hover:bg-[#d4a72c] text-[#1a0d00] font-bold py-3 px-6 rounded-tl-2xl rounded-br-2xl
                          transition-all duration-300 text-lg flex-1 shadow-lg hover:shadow-[#eeba30]/50"
              >
                Register Now
              </button>
              <button 
                className="bg-[#1a0d00] hover:bg-[#2a1800] text-[#eeba30] font-bold py-3 px-6 rounded-tl-2xl rounded-br-2xl
                          border-2 border-[#eeba30] transition-all duration-300 text-lg flex-1 hover:shadow-[#eeba30]/30"
              >
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;