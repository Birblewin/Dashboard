import React from 'react';
import Image from 'next/image';

const Background = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Image
        loading="lazy"
        className="fixed top-0 left-0 w-full h-full z-10 object-cover"
        src="/Top-left Gradient.png"
        alt="Top Left Gradient"
        width={1920}
        height={1080}
      />
      <Image
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        src="/small planets.png"
        alt="Small Planets"
        width={1920}
        height={1080}
      />
      <Image
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover "
        src="/stars.png"
        alt="Stars"
        width={1920}
        height={1080}
      />
      <div className="absolute top-0 right-0 z-10">
        <Image
          loading="lazy"
          className="max-w-screen-lg z-10 object-cover object-center"
          src="/Top-right Gradient.png.png"
          alt="Top Right Gradient"
          width={1000}
          height={1000}
        />
      </div>
      <Image
        loading="lazy"
        className="absolute inset-0 w-full h-full z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-1/2 lg:my-auto lg:mx-auto lg:-bottom-[98%] lg:h-auto gap-4 object-contain transform translate-y-64 lg:translate-y-0 transition duration-500"
        src="/Big Planet.png"
        alt="Big Planet"
        width={500}
        height={500}
      />

      <Image
        loading="lazy"
        className="absolute inset-0 z-10 my-auto mx-auto flex items-center justify-center w-64 md:w-80 sm:my-auto lg:w-auto lg:h-56 transform rotate-90 sm:rotate-0 transition duration-500 scale-150 sm:scale-100"
        src="/404.png"
        alt="404"
        width={500}
        height={300}
      />

      <Image
        loading="lazy"
        className="absolute my-auto mx-auto inset-0 z-10 flex items-center justify-center w-64 md:w-80 sm:my-auto lg:w-auto lg:mt-40 lg:h-1/2 transform scale-75 sm:scale-100 transition duration-500"
        src="/Astronaut.png"
        alt="Astronaut"
        width={500}
        height={500}
      />
      <div className="absolute inset-0 flex mx-auto items-center pointer-events-none justify-center -top-80 z-10">
        <h1 className='text-white text-3xl sm:text-center -mt-32 md:text-5xl lg:text-5xl'>Page Not Found</h1>
      </div>

      <a href="/" className='absolute mt-56 ml-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white py-2 px-8 rounded-3xl text-black sm:text-xl md:text-2xl lg:text-xl lg:mt-40'>
        Go Home
      </a>
    </div>
  );
};

export default Background;