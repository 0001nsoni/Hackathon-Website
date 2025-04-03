import React from 'react';
import logo from '../assets/home1.png';
import { FaLinkedin, FaTelegram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaDiscord, FaSquareInstagram } from "react-icons/fa6";
import frame from "../assets/frame.png";
import Rflag from "../assets/flagr.png"
import Bflag from "../assets/flagb.png"
import Gflag from "../assets/flagg.png"


const Contact = () => {
  return (
    <section id="contact">
      <div className="w-full min-h-screen text-[#eeba30] bg-black flex flex-col md:flex-row">
        {/* Section 1: Logo and Social Media (Left Panel) */}
        <div className="w-full md:w-1/3 py-8 md:py-12 flex flex-col items-center border-r border-gray-800">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-24 w-auto mb-6 md:h-32 md:mb-8 object-contain"
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
        <div style={{ 
                    backgroundImage: `url(${Bflag})`,}} className="w-full bg-cover md:w-1/3 py-8 md:py-16 bg-gray-950 flex flex-col items-center border-r border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Contact Us</h2>
          <div className=" gap-4 md:gap-6 w-full max-w-xs px-4">
            <div className="p-4 md:p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-sm">xyz@gmail.com</p>
            </div>
            
            <div className="p-4 md:p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                <FaPhone className="text-green-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <p className="text-sm">+91 1122334455</p>
            </div>
            
            <div className="p-4 md:p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                <FaMapMarkerAlt className="text-purple-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Location</h3>
              <p className="text-sm">ACEIT, Kukas Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>

        {/* Section 3: Map with Frame (Right Panel) */}
        <div className="w-full bg-cover md:w-1/3 py-8 md:py-16 bg-gray-900"style={{ 
                    backgroundImage: `url(${Rflag})`,}}>
          <div className="h-full flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 px-4">Find Us</h2>
            <div className="flex-1 flex justify-center items-center px-4">
              {/* Container for map with frame */}
              <div className="relative w-full max-w-lg h-[350px] md:h-[400px]">
                {/* Map */}
                <div className="absolute inset-0 flex justify-center items-center z-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.0091768445336!2d75.89098077479052!3d27.029875955046872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396daf9e6f4d2f3b%3A0x5b28af6fe5c60627!2sArya%20College%20of%20Engineering%20%26%20IT!5e0!3m2!1sen!2sin!4v1743687727628!5m2!1sen!2sin" 
                    width="97%"
                    height="97%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
                
                {/* Frame overlay */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{ 
                    backgroundImage: `url(${frame})`,
                    backgroundSize: '105% 105%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;