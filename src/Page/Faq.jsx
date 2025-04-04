import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "What is the Arya Hackathon?",
      answer: "The Arya Hackathon is an annual event where participants come together to solve real-world problems through coding and innovation."
    },
    {
      question: "Who can participate?",
      answer: "The hackathon is open to all students currently enrolled in any college or university."
    },
    {
      question: "What are the team size requirements?",
      answer: "Teams can consist of 2-4 members. Solo participants are also welcome but encouraged to form teams."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, chargers, and any other tech you need. We'll provide the rest!"
    },
    {
      question: "Is there any registration fee?",
      answer: "No, the event is completely free for all participants."
    },
    {
      question: "What prizes can we win?",
      answer: "Winners receive cash prizes, tech gadgets, and internship opportunities with our sponsors."
    }
  ];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      id='faq' 
      className='flex items-center justify-center gap-10 min-h-screen bg-black text-white flex-col py-12 px-4'
    //   style={{ backgroundColor: '#0d0d0d' }} // Double ensure background color
    >
      <div className='text-3xl sm:text-4xl p-10 text-center md:text-5xl font-bold text-[#eeba30] mb-3 md:mb-4'>
        Frequently Asked Questions (FAQs)
      </div>
      
      <div className='w-full max-w-4xl p-5 pt-0 space-y-4'>
        {visibleFaqs.map((faq, index) => (
          <motion.div 
            key={index}
            className='border-b border-[#eeba30]/30 pb-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              className='flex items-center justify-between w-full text-left focus:outline-none'
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#eeba30] font-rye">
                {faq.question}
              </h2>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeIndex === index ? (
                  <FaChevronUp className="text-[#eeba30] ml-4" />
                ) : (
                  <FaChevronDown className="text-[#eeba30] ml-4" />
                )}
              </motion.div>
            </button>
            
            <motion.div
              className='overflow-hidden'
              initial={{ height: 0 }}
              animate={{ height: activeIndex === index ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="pt-4 text-gray-300 ">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}

        {faqs.length > 3 && (
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#eeba30] hover:bg-[#d4a72c] p-5 text-xl text-[#1a0d00] font-bold py-2 px-6 rounded-tl-2xl rounded-br-2xl transition-all duration-300 font-rye"
            >
              {showAll ? 'Read Less' : 'Read More'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Faq;