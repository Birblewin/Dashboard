import React from 'react';

const Background = () => {
  return (
    <div className='relative h-screen overflow-hidden'>
      <img
        loading="lazy"
        width="full"
        height="30"
        className="fixed top-0 left-0 w-full h-full"
        style={{ color: "transparent", zIndex: 1 }}
        src="/Stars.png"
      />
      <img
        loading="lazy"
        width="full"
        height="30"
        className="fixed top-0 left-0 w-full h-full"
        style={{ color: "transparent", zIndex: 1 }}
        src="/Small Planets.png"
      />

      <img
        loading="lazy"
        width='500'
        height="400"
        className="absolute object-contain mx-auto"
        style={{ color: "transparent", zIndex: 1 }}
        src="/Top-left Gradient.png"
      />
      <img
        loading="lazy"
        height="45"
        className="absolute top-0 right-0 object-contain mx-auto"
        style={{ color: "transparent", zIndex: 1 }}
        src="/Top-right Gradient.png.png"
      />
      <img
        loading="lazy"
        width='600'
        height="45"
        className="absolute inset-0 mt-48 object-contain mx-auto"
        style={{ color: "transparent", zIndex: 1 }}
        src="/404.png"
      />
      <div className='relative overflow-hidden h-screen flex justify-center items-center'>
        <img
          loading="lazy"
          width="550"
          height="55"
          className="absolute bottom-0 transform translate-y-48 mx-auto"
          style={{ color: "transparent", zIndex: 1 }}
          src="/Big Planet.png"
        />
      </div>
      <img
        loading="lazy"
        width="250"
        height="350"
        className="absolute inset-0 transform translate-y-48 mx-auto "
        style={{ color: "transparent", zIndex: 1 }}
        src="/Astronaut.png"
      />
      <div className=' absolute inset-0 flex mx-auto items-center justify-center'>
        <h1 className='text-white pointer-events-none mt-[-30%] text-3xl ' style={{ zIndex: 1 }}>Page Not Found</h1>
      </div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <a href="/" className='bg-white translate-y-44 py-2 px-6 rounded-3xl text-black' style={{ zIndex: 1 }}>
          Go Home
        </a>
      </div>

    </div>
  );
};

export default Background;
