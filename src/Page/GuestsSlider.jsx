import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GuestsSlider = () => {
  const swiperRef = useRef(null);

  const guests = [
    {
      name: "Jaljinder Singh",
      title: "Mentor 6.3x4bp",
      description: "are gator, technology",
      image: "/path/to/jaljinder.jpg",
      linkedin: "https://linkedin.com/in/jaljinder"
    },
    {
      name: "Manav Gupta",
      title: "Mentor 6.3x0bp",
      description: "aka Lenoor, Jury | A Researcher\nBL100Kingsheers | SHY26.3x0bp",
      image: "/path/to/manav.jpg",
      linkedin: "https://linkedin.com/in/manav"
    },
    {
      name: "Rahul Bhargava",
      title: "Director",
      description: "7 Times TEDX Speaker | 130th-\nSessions | National Awardee |\nStarting India Mentor",
      image: "/path/to/rahul.jpg",
      linkedin: "https://linkedin.com/in/rahul"
    },
    {
      name: "Chintan Vatsa Jha",
      title: "Mentor 8.3x4bp",
      description: "India Hotel Slice In | Ex-Wake!",
      image: "/path/to/chintan.jpg",
      linkedin: "https://linkedin.com/in/chintan"
    },
    {
      name: "Pranav Malik",
      title: "Mentor 8.3x3bp",
      description: "SLIE: # (BURADE) Ex-Microsoft,\nPayPal, ORGO",
      image: "/path/to/pranav.jpg",
      linkedin: "https://linkedin.com/in/pranav"
    },
    {
      name: "Abhimanyu Shekhawat",
      title: "Mentor 8.3x3bp",
      description: "Co-Founder (Eighth Protocol) Ex\nCo-Founder (BSIGs Wallet",
      image: "/path/to/abhimanyu.jpg",
      linkedin: "https://linkedin.com/in/abhimanyu"
    }
  ];

  return (
    <section id="guests" className="bg-black py-16 px-4 w-full">
      <div className=" w-full mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#eeba30] mb-12 text-center">
          Guests
        </h1>
        
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            speed={3000}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              type: 'bullets',
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="pb-12"
          >
            {guests.map((guest, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br m-4 from-gray-900 to-gray-700 rounded-tl-4xl rounded-br-4xl p-6 h-[400px] border-2 border-[#eeba30] flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#eeba30]/20">
                  {/* Profile Image with Animation */}
                  <div className="relative mx-auto mb-4 w-40 h-40 rounded-full overflow-hidden border-4 border-[#eeba30] group">
                    <img 
                      src={guest.image} 
                      alt={guest.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = '/path/to/default-profile.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-[#eeba30] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="text-[#eeba30] font-bold text-lg mb-1 text-center">{guest.title}</div>
                  <h3 className="text-white text-xl font-bold mb-2 text-center transition-colors duration-300 hover:text-[#eeba30]">
                    {guest.name}
                  </h3>
                  
                  <div className="flex justify-center mb-4">
                    <a 
                      href={guest.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#eeba30] hover:text-white transition-colors transform hover:scale-110 duration-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                  
                  <p className="text-gray-300 whitespace-pre-line text-center flex-grow transition-colors duration-300 hover:text-white">
                    {guest.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev after:text-[#eeba30] hover:after:text-[#ffd700] after:text-2xl"></div>
          <div className="swiper-button-next after:text-[#eeba30] hover:after:text-[#ffd700] after:text-2xl"></div>
          
          {/* Custom Pagination */}
          <div className=" swiper-pagination !bottom-0 [&>.swiper-pagination-bullet]:bg-gray-500 [&>.swiper-pagination-bullet-active]:bg-[#eeba30]"></div>
        </div>
      </div>
    </section>
  );
};

export default GuestsSlider;