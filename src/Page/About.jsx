import React from 'react';
import { FaCalendarDays, FaLocationDot, FaUsers } from "react-icons/fa6";
import { motion } from 'framer-motion';
import backgroundGif from '../assets/222739.gif';

const About = ({ id }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id={id} 
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-12 px-4"
      style={{
        backgroundImage: `url(${backgroundGif})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundColor: 'rgba(0,0,0,0.7)', // Add a dark overlay
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Content */}
      <motion.div 
        className="relative w-full flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Title */}
        <motion.div 
          className='text-[#e0af38] m-2 p-2 text-4xl sm:text-5xl md:text-6xl font-bold text-center font-serif tracking-wider'
          variants={itemVariants}
        >
          About Us
        </motion.div>
        
        {/* Description */}
        <motion.div 
          className='w-[90%] sm:w-4/5 md:w-3/4 lg:w-1/2 text-lg sm:text-xl md:text-2xl rounded-tl-3xl rounded-br-3xl p-4 sm:p-6 md:p-8 text-[#e0af38] border-2 border-[#e0af38] bg-[#1a0d00]/90 backdrop-blur-sm mb-8 sm:mb-12 leading-relaxed'
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          HackTantra 2024 is Rajasthan's most electrifying student-run hackathon, uniting innovators and tech enthusiasts for 24 hours of coding, creativity, and problem-solving.

          "It matters not what you are born, but what you code to be." Step into a realm where spells are algorithms, wands are keyboards, and innovation is your Patronus.

          Join us as we code, create, and enchant the future of technology!
        </motion.div>

        {/* Event Details */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-[90%] sm:w-4/5 md:w-3/4"
          variants={containerVariants}
        >
          {/* Date Card */}
          <motion.div 
            className="bg-[#1a0d00]/90 border-2 border-[#e0af38] rounded-tl-2xl rounded-br-2xl p-4 sm:p-6 text-[#e0af38] flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <FaCalendarDays className="text-3xl sm:text-4xl mb-3 sm:mb-4" />
            <h1 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Event Date</h1>
            <p className="text-sm sm:text-base text-center">April 19 - April 20, 2025</p>
            <p className="text-sm sm:text-base text-center">24 hours of non-stop innovation</p>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            className="bg-[#1a0d00]/90 border-2 border-[#e0af38] rounded-tl-2xl rounded-br-2xl p-4 sm:p-6 text-[#e0af38] flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <FaLocationDot className="text-3xl sm:text-4xl mb-3 sm:mb-4" />
            <h1 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Location</h1>
            <p className="text-sm sm:text-base text-center">Arya College of Engineering & IT</p>
            <p className="text-sm sm:text-base text-center">Kukas, Jaipur, Rajasthan</p>
          </motion.div>

          {/* Participants Card */}
          <motion.div 
            className="bg-[#1a0d00]/90 border-2 border-[#e0af38] rounded-tl-2xl rounded-br-2xl p-4 sm:p-6 text-[#e0af38] flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <FaUsers className="text-3xl sm:text-4xl mb-3 sm:mb-4" />
            <h1 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Participants</h1>
            <p className="text-sm sm:text-base text-center">400+ Coders</p>
            <p className="text-sm sm:text-base text-center">100+ Teams</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;