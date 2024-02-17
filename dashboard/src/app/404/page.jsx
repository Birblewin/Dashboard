import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Background = () => {
  return (

    <div className='w-full h-full '>
      <div className=" min-h-screen inset-0 flex flex-col items-center justify-center fixed">
        <Image
          className="absolute bg-[url('/Stars.png')] bg-cover bg-center h-screen w-full object-cover"
          alt="stars"
        />
        <Image
          className="absolute bg-[url('/Small-Planets.png')] bg-cover bg-center h-screen w-full object-cover"
          alt="small planets"
        />
        <Image
          className="absolute bg-[url('/left-Gradient.png')] bg-cover bg-center h-screen w-full object-cover"
        />
        <Image
          className="absolute bg-[url('/right-Gradient.png')] bg-cover bg-center h-screen w-full object-cover top-0 right-0"
          alt="small planets"
        />
        <Image
          className="absolute bg-[url('/404.png')] bg-no-repeat h-full w-full bg-center p-[30rem] md:p-0 rotate-90  sm:rotate-0 scale-50 md:scale-75 object-cover"
          alt="404"

        />

        <Image
          className="absolute bg-[url('/Big-Planet.png')] bg-center bg-no-repeat bg-cover w-full h-1/4 md:w-1/2 md:h-1/2 translate-y-80 object-cover"
          alt="big planet"
        />
      </div>
      <h1 className="text-center text-2xl md:text-5xl pointer-events-none translate-y-16 md:translate-y-28">
        Page Not Found
      </h1>
      <Image
        className="absolute bg-[url('/Astronaut.png')] bg-cover translate-y-[36%]  md:bg-center md:translate-y-[36%]  md:translate-x-[32rem] object-center md:w-1/6 md:h-9/12 w-9/12 h-1/2 z-10 object-cover"
        alt="astronaut"
      />
      <span className="absolute bottom-0 left-1/2 transform -translate-x-10 -translate-y-16 md:-translate-y-24 md:-translate-x-16">
        <Link href="/" className="bg-white py-3 px-8 rounded-3xl text-black">
          Go Home
        </Link>
      </span>

    </div>
  );
};

export default Background;
