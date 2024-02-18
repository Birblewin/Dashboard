import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Train = () => {
  return (
    <>
      <div className="min-h-screen inset-0 flex flex-col items-center justify-center fixed z-10">
        <div
          loading="lazy"
          className="absolute bg-[url('/Small-Planets.png')] bg-cover object-contain bg-no-repeat bg-center w-full h-full"
        />
        <div
          loading="lazy"
          className="absolute bg-[url('/Stars.png')] bg-cover object-contain bg-no-repeat bg-center w-full h-full"
        />
        <div
          loading="lazy"
          className="absolute bg-[url('/left-Gradient.png')] bg-cover object-contain bg-no-repeat bg-center w-full h-full"
        />
        <div
          loading="lazy"
          className="absolute bg-[url('/right-Gradient.png.png')] bg-cover object-contain bg-no-repeat bg-center w-full h-full top-0 right-0"
        />
        <Image
          loading="lazy"
          className="absolute transform rotate-90 sm:rotate-0 transition duration-500 md:w-1/2 z-[1]"
          src='/404.png'
          width={500}
          height={300}
        />
        <Image
          loading="lazy"
          className="absolute mx-auto w-full translate-y-full  md:w-3/4 md:translate-y-[26rem]  "
          src='/Big-Planet.png'
          width={500}
          height={500}
        />
      </div>
      <div className="m-h-screen inset-0 flex flex-col items-center justify-center fixed z-10">
        <h1 className='mt-10 text-3xl -translate-y-[18rem] md:text-4xl md:-translate-y-[12rem] pointer-events-none'>Page Not Found</h1>
        <Image
          loading="lazy"
          className="absolute w-1/2 md:w-1/4 md:object-contain md:h-1/2 md:translate-y-8"
          src="/Astronaut.png"
          width={500}
          height={300}
        />
        <Link href="/" className='absolute z-10 bg-white text-black py-2 px-6 text-sm md:text-lg rounded-3xl translate-y-[14rem] md:translate-y-[13rem]
        '>
          Go Home
        </Link>
      </div>
    </>

  );
};

export default Train;
