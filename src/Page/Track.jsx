import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import house from '../assets/house.gif';

const Track = ({ id }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const houses = [
    {
      name: "Gryffindor",
      icon: "🦁",
      color: "#ae0001",
      secondaryColor: "#eeba30",
      track: "AI/ML & Emerging Tech",
      description: "For the brave innovators working on cutting-edge artificial intelligence, machine learning, and emerging technologies that will shape our future."
    },
    {
      name: "Ravenclaw",
      icon: "🦅",
      color: "#0e1a40",
      secondaryColor: "#946b2d",
      track: "Cybersecurity & Algorithms",
      description: "For the wise problem-solvers specializing in cybersecurity, encryption, and complex algorithm development to protect and optimize our digital world."
    },
    {
      name: "Hufflepuff",
      icon: "🦡",
      color: "#ecb939",
      secondaryColor: "#372e29",
      track: "Web & App Development",
      description: "For the dedicated builders creating beautiful, functional web applications and mobile experiences that connect people and solve real problems."
    },
    {
      name: "Slytherin",
      icon: "🐍",
      color: "#2a623d",
      secondaryColor: "#aaaaaa",
      track: "Blockchain & Cloud",
      description: "For the ambitious visionaries developing decentralized blockchain solutions and scalable cloud architectures that power the next generation of applications."
    }
  ];

  // Preload the background image
  useEffect(() => {
    const img = new Image();
    img.src = house;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsLoaded(true); // Continue even if image fails to load
  }, []);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 0.9,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  if (!isLoaded) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-black">
        <div className="text-[#eeba30]">Loading houses...</div>
      </div>
    );
  }

  return (
    <section 
      id={id} 
      className="relative w-full min-h-screen bg-black py-16 px-4 overflow-hidden font-rye"
      // style={{
      //   background: `linear-gradient(rgba(13, 13, 13, 0.85), rgba(13, 13, 13, 0.9))`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat'
      // }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#eeba30] mb-3 md:mb-4">
            House of Tech
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your house and join fellow wizards in your specialized tech track
          </p>
        </motion.div>

        {/* House Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {houses.map((house, index) => (
            <motion.div 
              key={house.name}
              variants={itemVariants}
              className="rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              style={{
                background: `linear-gradient(145deg, ${house.color} 0%, ${house.secondaryColor} 100%)`,
                boxShadow: `0 4px 30px rgba(0, 0, 0, 0.3)`,
                border: `1px solid ${house.secondaryColor}`,
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-5 md:p-6 h-full flex flex-col">
                <div className="flex items-center mb-3 md:mb-4">
                  <span className="text-3xl md:text-4xl mr-3">{house.icon}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{house.name}</h3>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 mb-4 flex-grow">
                  <h4 className="text-lg md:text-xl font-semibold text-[#eeba30] mb-2">{house.track}</h4>
                  <p className="text-sm md:text-base text-gray-200">{house.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Open Innovation Track */}
        <motion.div
          className="text-center mt-12 p-4 rounded-tl-3xl rounded-br-3xl bg-black/50 rounded-lg border border-[#eeba30]/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-lg md:text-xl  text-[#eeba30] font-semibold">
            Open Innovation Track is Also Available for Interested Developers!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Track);