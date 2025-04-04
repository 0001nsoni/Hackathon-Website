import React from 'react';
import Card from '../components/Card';

function Sponsors() {
  // Sample sponsor data
  const sponsors = {
    organizedBy: [
      { name: "Arya College of Engineering & IT Jaipur", logo: "src/assets/Arya.jpg" },
      { name: "Arya College of Engineering & IT Jaipur", logo: "src/assets/AIC.png" },
      { name: "I.I.C", logo: "src/assets/iic.png" },
      { name: "Arya Hackathon Club", logo: "src/assets/hack.png" },
    ],
    
    sponsoredBy: [
      { name: "GeeksForGeeks", logo: "src/assets/GFG.png" },
      { name: "Devfolio", logo: "src/assets/DEV.png" },
      { name: "Codeup", logo: "src/assets/UP.png" }
    ],/*
    partners: [
      { name: "Flourish and Blotts", logo: "/path/to/flourish-logo.png" },
      { name: "The Leaky Cauldron", logo: "/path/to/cauldron-logo.png" }
    ]
    */
  };

  return (
    <section id="sponsors" className='bg-black w-full py-12 px-4 flex items-center justify-center flex-col'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#eeba30] mb-8 md:mb-12'>Sponsors</h1>
      
      {/* Organized By Section */}
      <div className='w-full max-w-6xl mb-12'>
        <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#eeba30] mb-6 text-center'>
          Organised By
        </h2>
        <div className='flex flex-wrap justify-center gap-8'>
          {sponsors.organizedBy.map((sponsor, index) => (
            <Card 
              key={`organized-${index}`}
              name={sponsor.name}
              logo={sponsor.logo}
              type="organized"
            />
          ))}
        </div>
      </div>

      
      Sponsored By Section - Commented out for future use
      <div className='w-full max-w-6xl mb-12'>
        <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#eeba30] mb-6 text-center'>
          Sponsored By
        </h2>
        <div className='flex flex-wrap justify-center gap-8'>
          {sponsors.sponsoredBy?.map((sponsor, index) => (
            <Card 
              key={`sponsored-${index}`}
              name={sponsor.name}
              logo={sponsor.logo}
              type="sponsored"
            />
          ))}
        </div>
      </div>
{/*
      Partners Section - Commented out for future use
      <div className='w-full max-w-6xl'>
        <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#eeba30] mb-6 text-center'>
          Partners
        </h2>
        <div className='flex flex-wrap justify-center gap-8'>
          {sponsors.partners?.map((sponsor, index) => (
            <Card 
              key={`partner-${index}`}
              name={sponsor.name}
              logo={sponsor.logo}
              type="partner"
            />
          ))}
        </div>
      </div>
      */}
    </section>
  );
}

export default Sponsors;