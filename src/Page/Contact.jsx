import React, { useState, useEffect } from 'react';
import logo from '../assets/main.png';
import { FaLinkedin, FaTelegram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaDiscord, FaSquareInstagram } from "react-icons/fa6";
import frame from "../assets/frame2.webp";
import { RiTwitterXFill } from "react-icons/ri";


const Contact = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imageUrls = [frame, logo];
      const promises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
        setImagesLoaded(true);
      }
    };

    loadImages();
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-black">
        <div className="text-[#eeba30]">Loading...</div>
      </div>
    );
  }

  return (
    <section id="contact">
      <div className="w-full min-h-screen text-[#eeba30] bg-black flex flex-col md:flex-row">
        {/* Section 1: Logo and Social Media (Left Panel) */}
        <div className="w-full md:w-1/3 py-8 md:py-12 flex flex-col items-center justify-center">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-50 w-auto mb-6 md:h-70 md:mb-8 object-contain"
            loading="lazy"
            width={128}
            height={128}
          />
          
          <div className="text-center w-full px-4">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Follow Us</h2>
            <div className="flex justify-center space-x-6 md:space-x-8">
              <a href="#" className="text-3xl md:text-4xl text-[#eeba30] hover:text-white transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://discord.gg/J6e8ZRpb" className="text-3xl md:text-4xl text-[#eeba30] hover:text-white transition-colors">
                <FaDiscord />
              </a>
              <a href="https://x.com/hackaryaverse?s=11" className="text-3xl md:text-4xl text-[#eeba30] hover:text-white transition-colors">
              <RiTwitterXFill />
              </a>
              <a href="https://www.instagram.com/hackaryaverse?igsh=Ync2YWM2MDV0anV5" className="text-3xl md:text-4xl text-[#eeba30] hover:text-white transition-colors">
                <FaSquareInstagram />
              </a>
              <a href="https://t.me/hackaryaverse" className="text-3xl md:text-4xl text-[#eeba30] hover:text-white transition-colors">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: Contact Information (Middle Panel) */}
        <div className="w-full md:w-1/3 py-8 md:py-16  flex flex-col items-center ">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Contact Us</h2>
            <div className="gap-4 md:gap-6  m-auto w-full max-w-xs px-4">
              <div className="p-4 md:p-6  rounded-lg shadow-md text-center bg-black/70 backdrop-blur-sm border border-[#eeba30]/30">
                <div className="bg-[#eeba30] w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-sm">tpo@aryacollege.in <br/> aryastudentclubs@aryacollege.in</p>
              </div>
              
              <div className="p-4 md:p-6 rounded-lg shadow-md text-center bg-black/70 backdrop-blur-sm border border-[#eeba30]/30">
                <div className="bg-[#eeba30] w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                  <FaPhone className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-sm">+91 8958149867 <br /> +91 9324264950 </p>
              </div>
              
              <div className="p-4 md:p-6 rounded-lg shadow-md text-center bg-black/70 backdrop-blur-sm border border-[#eeba30]/30">
                <div className="bg-[#eeba30] w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p className="text-sm">ACEIT, Kukas Jaipur, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Map with Frame (Right Panel) */}
        <div className="w-full md:w-1/3 py-8 md:py-16 relative">
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mt-7 text-center mb-3 md:mb-3 px-4">Find Us</h2>
            <div className="flex-1 flex justify-center items-center px-4">
              <div className="relative w-full p-10 max-w-lg h-[350px] md:h-[400px]">
                <iframe
                  title="College Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.0091768445336!2d75.89098077479052!3d27.029875955046872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396daf9e6f4d2f3b%3A0x5b28af6fe5c60627!2sArya%20College%20of%20Engineering%20%26%20IT!5e0!3m2!1sen!2sin!4v1743687727628!5m2!1sen!2sin"
                  width="90%"
                  height="90%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute top-5 left-5 inset-0 rounded-lg p-0.5 z-0"
                />
                
                <div 
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{ 
                    backgroundImage: `url(${frame})`,
                    backgroundSize: '110% 110%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);