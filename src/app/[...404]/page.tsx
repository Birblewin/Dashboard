import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <div className="min-h-screen inset-0 flex flex-col items-center justify-center fixed z-10">
        <div
          className="absolute bg-[url('/Small-Planets.png')] bg-cover object-contain bg-no-repeat bg-center w-full h-full"
        />
        <div
          className="absolute bg-[url('/Stars.png')] bg-cover object-contain bg-no-repeat bg-center w-full h-full"
        />
        <div
          className="absolute bg-[url('/left-Gradient.png')] bg-cover object-contain bg-no-repeat bg-center w-full h-full"
        />
        <div
          className="absolute bg-[url('/right-Gradient.png.png')] bg-cover object-contain bg-no-repeat bg-center w-full h-full top-0 right-0"
        />
        <Image
          loading="lazy"
          className="absolute transform rotate-90 sm:rotate-0 transition duration-500 md:w-3/4 md:object-contain z-[1]"
          src='/404.png'
          alt="404 image"
          width={500}
          height={300}
        />
        <Image
          loading="lazy"
          className="absolute mx-auto w-full translate-y-full  md:w-3/4 md:translate-y-[26rem]  "
          src='/Big-Planet.png'
          alt="big planet image"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl text-center mb-16 z-10">Page Not Found</h1>
        <Image
          loading="lazy"
          className="w-60 h-auto mb-8 z-10 md:w-1/4 md:-mt-10"
          src="/Astronaut.png"
          width={500}
          height={300}
          alt="Astronaut"
        />
        <Link href="/" className="text-black bg-white px-6 py-2 rounded-3xl mt-10 sm:-mt-14 z-10">
          Go Home
        </Link>
      </div>
    </>

  );
};

export default NotFoundPage;
