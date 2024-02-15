import React from 'react';

const Background = () => {
  return (
    <div className='relative h-screen overflow-hidden'>
      {/* Background images */}
      <img
        loading="lazy"
        className="fixed top-0 left-0 w-full h-full"
        style={{ color: "transparent", zIndex: 1 }}
        src="/stars.png"
        alt="Stars"
      />
      <img
        loading="lazy"
        className="fixed top-0 left-0 w-full h-full"
        style={{ color: "transparent", zIndex: 1 }}
        src="/small planets.png"
        alt="Small Planets"
      />

      {/* Gradient images */}
      <img
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full"
        style={{ color: "transparent", zIndex: 1 }}
        src="/Top-left Gradient.png"
        alt="Top Left Gradient"
      />
      <img
        loading="lazy"
        className="absolute top-0 right-0 w-full h-full"
        style={{ color: "transparent", zIndex: 1, maxWidth: '90vw' }}
        src="/Top-right Gradient.png.png"
        alt="Top Right Gradient"
      />

<div className="absolute inset-0 flex justify-center items-center md:justify-center md:items-center"> {/* Center the image in larger screens */}
        <img
          loading="lazy"
          className="max-w-full h-auto transform rotate-90 md:rotate-0 md:max-w-full md:h-auto transition-transform duration-500 z-10" // Added z-index
          style={{ color: "transparent", zIndex: 1, maxWidth: '50vw' }}
          src="/404.png"
          alt="404"
        />
      </div>

      {/* Big planet */}
      <div className=' relative overflow-hidden h-screen flex justify-center items-center z-1'> {/* Lower z-index to overlay with 404 image */}
        <img
          loading="lazy"
          className="absolute bottom-[-26%] mt-[-30%] transform -translate-y-24 mx-auto transition-transform md:translate-y-0 md:mt[-18%]"
          style={{ color: "transparent", zIndex: 1, maxWidth: '40vw' }}
          src="/Big Planet.png"
          alt="Big Planet"
        />
      </div>


      {/* Astronaut */}
      <div className="absolute inset-0 flex justify-center items-center md:justify-center md:items-center"> {/* Center the image in larger screens */}
        <img
          loading="lazy"
          className="max-w-full mt-[5%] h-auto transition-transform md:max-w-full md:h-auto" // Responsive styles
          style={{ color: "transparent", zIndex: 1, maxWidth: '20vw' }}
          src="/Astronaut.png"
          alt="Astronaut"
        />
      </div>

      {/* Page not found text */}
      <div className="absolute inset-0  flex mx-auto items-center justify-center z-10"> {/* Set z-index to overlay */}
        <h1 className='text-white pointer-events-none  text-3xl md:text-center' style={{ marginTop: '-8%', marginBottom: '20%' }}>Page Not Found</h1>
      </div>

      {/* Go home button */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <a href="/" className='bg-white translate-y-44 py-2 px-6 rounded-3xl text-black' style={{ zIndex: 1 }}>
          Go Home
        </a>
      </div>
    </div>
  );
};

export default Background;
