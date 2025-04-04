import React from 'react';

const Card = ({ name, logo, type }) => {
  // Different styling based on sponsor type
  const cardStyle = {
    organized: {
      container: "bg-gradient-to-br from-gray-900 to-gray-800",
      border: "border-r-4 border-b-4 border-[#eeba30]",
      accent: "bg-[#eeba30]",
      text: "from-[#eeba30] to-[#d3a625]"
    },
    sponsored: {
      container: "bg-gradient-to-br from-[#740001] to-[#3a0001]",
      border: "border-r-4 border-b-4 border-[#eeba30]",
      accent: "bg-[#740001]",
      text: "from-[#eeba30] to-[#d3a625]"
    },
    partner: {
      container: "bg-gradient-to-br from-[#0d6217] to-[#06300c]",
      border: "border-r-4 border-b-4 border-[#eeba30]",
      accent: "bg-[#0d6217]",
      text: "from-[#eeba30] to-[#d3a625]"
    },
    media: {
      container: "bg-gradient-to-t from-[#27364d]/30 to-[#5854cd]/60",
      border: "border-r-4 border-b-4 border-[#eeba30]",
      accent: "bg-[#eeba30]",
      text: "from-[#eeba30] to-[#ffd700]"
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-xl p-0.5 ${cardStyle[type].border} shadow-lg group w-64 h-80`}>
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#eeba30] via-[#d3a625] to-[#eeba30] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      <div className={`relative h-full rounded-xl ${cardStyle[type].container} p-4 flex flex-col items-center`}>
        {/* Image container with custom shape */}
        <div className={`relative mb-6 w-32 h-32 flex-shrink-0 ${type === 'media' ? 'animate-pulse' : ''}`}>
          <div className={`absolute inset-0 rounded-full border-4 border-[#eeba30] p-1 transform ${type === 'media' ? 'rotate-0' : 'rotate-2'} group-hover:rotate-0 transition-transform duration-300`}>
            <img 
              src={logo} 
              alt={name} 
              className="w-full h-full rounded-full object-cover bg-white p-1"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = '/path/to/default-image.png'
              }}
            />
          </div>
          {/* Golden corner accents */}
          {type !== 'media' && (
            <>
              <div className={`absolute -top-2 -left-2 w-8 h-8 ${cardStyle[type].accent} rounded-full opacity-80`}></div>
              <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${cardStyle[type].accent} rounded-full opacity-80`}></div>
            </>
          )}
          {type === 'media' && (
            <div className="absolute -inset-2 rounded-full border-2 border-[#eeba30] opacity-30 animate-ping"></div>
          )}
        </div>
        
        {/* Sponsor name with proper text wrapping */}
        <div className="w-full flex-grow flex flex-col items-center justify-center px-2">
          <h3 className="text-center w-full">
            <span className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${cardStyle[type].text} group-hover:from-[#ffd700] group-hover:to-[#eeba30] transition-colors duration-300 break-words line-clamp-3`}>
              {name}
            </span>
            <div className={`mt-2 mx-auto w-16 h-1 ${cardStyle[type].accent} rounded-full`}></div>
          </h3>
        </div>
        
        {/* Hover effect elements */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-[#eeba30] opacity-5"></div>
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 border-2 border-[#eeba30] rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
          </div>
        </div>

        {/* Media partner badge */}
        {type === 'media' && (
          <div className="absolute top-2 right-2 bg-[#eeba30] text-black text-xs font-bold px-2 py-1 rounded-full">
            MEDIA
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;