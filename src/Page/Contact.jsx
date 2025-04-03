import React, { useState, useEffect } from 'react';
import logo from '../assets/home1.png';
import { FaLinkedin, FaTelegram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaDiscord, FaSquareInstagram } from "react-icons/fa6";
import frame from "../assets/frame.png";
import Rflag from "../assets/flagr.png";
import Bflag from "../assets/flagb.png";

const Contact = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images to prevent lag
  useEffect(() => {
    const loadImages = async () => {
      const imageUrls = [Rflag, Bflag, frame, logo];
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
        setImagesLoaded(true); // Continue even if some images fail to load
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
        <div className="w-full md:w-1/3 py-8 md:py-12 flex flex-col items-center justify-center border-r border-gray-800">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-35 w-auto mb-6 md:h-50 md:mb-8 object-contain"
            loading="lazy"
            width={200}
            height={200}
          />
          
          <div className="text-center w-full px-4">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Follow Us</h2>
            <div className="flex justify-center space-x-6 md:space-x-8">
              <a href="#" className="text-3xl md:text-4xl text-blue-600 hover:text-[#eeba30] transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="text-3xl md:text-4xl text-indigo-600 hover:text-[#eeba30] transition-colors">
                <FaDiscord />
              </a>
              <a href="#" className="text-3xl md:text-4xl text-blue-500 hover:text-[#eeba30] transition-colors">
                <FaTelegram />
              </a>
              <a href="#" className="text-3xl md:text-4xl text-pink-500 hover:text-[#eeba30] transition-colors">
                <FaSquareInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: Contact Information (Middle Panel) */}
        <div 
          className="w-full md:w-1/3 py-8 md:py-16 bg-gray-950 flex flex-col items-center border-r border-gray-800 relative"
        >
          {/* Optimized background with will-change and size constraints */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50 z-0 will-change-transform"
            style={{ 
              backgroundImage: `url(${Bflag})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          
          <div className="relative z-10 w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Contact Us</h2>
            <div className="gap-4 md:gap-6 m-auto w-full max-w-xs px-4">
              {[
                { icon: <FaEnvelope className="text-blue-600 text-xl" />, title: "Email", content: "xyz@gmail.com", bg: "bg-blue-100" },
                { icon: <FaPhone className="text-green-600 text-xl" />, title: "Phone", content: "+91 1122334455", bg: "bg-green-100" },
                { icon: <FaMapMarkerAlt className="text-purple-600 text-xl" />, title: "Location", content: "ACEIT, Kukas Jaipur, Rajasthan", bg: "bg-purple-100" }
              ].map((item, index) => (
                <div key={index} className="p-4 md:p-6 rounded-lg shadow-md text-center bg-black/70 backdrop-blur-sm">
                  <div className={`${item.bg} w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Map with Frame (Right Panel) */}
        <div className="w-full md:w-1/3 py-8 md:py-16 relative">
          {/* Optimized background with will-change and size constraints */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50 z-0 will-change-transform"
            style={{ 
              backgroundImage: `url(${Rflag})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          
          <div className="h-full flex flex-col relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 px-4">Find Us</h2>
            <div className="flex-1 flex justify-center items-center px-4">
              <div className="relative w-full max-w-lg h-[350px] md:h-[400px]">
                <iframe
                  title="College Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.0091768445336!2d75.89098077479052!3d27.029875955046872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396daf9e6f4d2f3b%3A0x5b28af6fe5c60627!2sArya%20College%20of%20Engineering%20%26%20IT!5e0!3m2!1sen!2sin!4v1743687727628!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 rounded-lg z-0"
                />
                
                <div 
                  className="absolute inset-0 z-10 pointer-events-none will-change-transform"
                  style={{ 
                    backgroundImage: `url(${frame})`,
                    backgroundSize: 'cover',
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