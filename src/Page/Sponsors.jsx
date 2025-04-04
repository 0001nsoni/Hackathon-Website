import React from 'react';
import Card from '../components/Card';
// Import images directly
import AryaLogo from '../assets/Arya.jpg';
import AICLogo from '../assets/AIC.png';
import IICLogo from '../assets/iic.png';
import HackLogo from '../assets/hack.png';
import GFGLogo from '../assets/GFG.png';
import DevLogo from '../assets/DEV.png';
import CodeUpLogo from '../assets/UP.png';
import WeAdLogo from '../assets/wem.jpg';
import AryaPhotoLogo from '../assets/photographyclub.jpg';

function Sponsors() {
  // Sample sponsor data with imported images
  const sponsors = {
    organizedBy: [
      { name: "Arya College of Engineering & IT Jaipur", logo: AryaLogo },
      { name: "Arya Incubation Center", logo: AICLogo },
      { name: "I.I.C", logo: IICLogo },
      { name: "Arya Hackathon Club", logo: HackLogo },
    ],
    sponsoredBy: [
      { name: "GeeksForGeeks", logo: GFGLogo },
      { name: "Devfolio", logo: DevLogo },
      { name: "Codeup", logo: CodeUpLogo }
    ],
    mediaPartners: [
      { name: "We Ad Media", logo:WeAdLogo  },
      { name: "Arya Photography club",logo: AryaPhotoLogo }, 
      { name: "Arya Movie club",   }
    ] 
    /*
    partners: [
      { name: "Flourish and Blotts", logo: "/path/to/flourish-logo.png" },
      { name: "The Leaky Cauldron", logo: "/path/to/cauldron-logo.png" }
    ]
    */
  };

  // Replace with your actual Google Drive PDF link
  const sponsorshipBrochureLink = "https://drive.google.com/file/d/YOUR_FILE_ID/view";

  const openSponsorshipPDF = () => {
    window.open(sponsorshipBrochureLink, "_blank");
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

      {/* Sponsored By Section */}
      <div className='w-full max-w-6xl mb-12'>
        <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#eeba30] mb-6 text-center'>
          Sponsored By
        </h2>
        <div className='flex flex-wrap justify-center gap-8'>
          {sponsors.sponsoredBy.map((sponsor, index) => (
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

      {/* Sponsor Button Section */}
      <div className="w-full max-w-6xl mb-12 text-center">
        <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#eeba30] mb-6'>
          Become a Sponsor for Hack Arya-Verse
        </h2>
        <button
          onClick={openSponsorshipPDF}
          className="bg-gradient-to-r from-[#eeba30] to-[#d3a625] hover:from-[#ffd700] hover:to-[#eeba30] text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          Sponsor Us
        </button>
      </div>

      {/* Media Partners Section - Ready for future use */}
      {sponsors.mediaPartners && sponsors.mediaPartners.length > 0 && (
        <div className='w-full max-w-6xl mb-12'>
          <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-[#eeba30] mb-6 text-center'>
            Media Partners
          </h2>
          <div className='flex flex-wrap justify-center gap-8'>
            {sponsors.mediaPartners.map((sponsor, index) => (
              <Card 
                key={`media-${index}`}
                name={sponsor.name}
                logo={sponsor.logo}
                type="media"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Sponsors;