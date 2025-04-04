import React, { useState, useEffect } from 'react'; 
import { motion } from 'framer-motion';
import owlGif from '../assets/owl.gif';
import treasureGif from '../assets/treasure.gif';
import galleonImg from '../assets/Gallen.jpg';
import snitchGif from '../assets/giphy.gif';
import candleImg from '../assets/candle.webp';

const PricePool = () => {
  const [revealed, setRevealed] = useState(false);
  const [sparks, setSparks] = useState([]);
  const lines = [
    "As secret as the Marauder's Map...",
    "Our treasures remain concealed...",
    "Revealed only to worthy wizards...",
    "The moment approaches...",
    "The owls are watching...",
    "Something magical is coming..."
  ];

  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [lines.length]);

  const createSpark = (e) => {
    const newSpark = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 0.5 + 0.3
    };
    setSparks((prev) => [...prev.slice(-10), newSpark]);
  };

  return (
    <section 
      id="price-pool" 
      style={{  backgroundColor: 'black', padding: '80px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}
      onClick={createSpark}
      className='p-5'
    >
      <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <motion.h1 
          style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '48px', color: '#eeba30', backgroundImage: 'linear-gradient(to right, #eeba30, #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Prize Pool
        </motion.h1>

        <motion.div
          style={{ position: 'absolute', top: '32px', right: '32px', width: '96px', height: '96px' }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <img 
            src={owlGif} 
            alt="Watching Owl" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </motion.div>

        <motion.div 
          style={{ position: 'relative', width: '256px', height: '256px', margin: '0 auto 48px', cursor: 'pointer' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setRevealed(!revealed)}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        >
          <img src={treasureGif} alt="Treasure Chest" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </motion.div>

        <div style={{ height: '96px', marginBottom: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.p 
            style={{ fontSize: '1.25rem', color: '#d1d5db', letterSpacing: 'wider' }}
            key={currentLine}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {lines[currentLine]}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PricePool;
