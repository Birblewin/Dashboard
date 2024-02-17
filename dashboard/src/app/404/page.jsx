import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Background = () => {
    return (
        <>
            <div className="min-h-screen inset-0 flex flex-col items-center justify-center fixed z-10">
                <Image
                    loading="lazy"
                    className="absolute bg-[url('/Small-Planets.png')] bg-cover object-contain bg-no-repeat bg-center w-full h-full"
                />
                <Image
                    loading="lazy"
                    className="absolute bg-[url('/Stars.png')] bg-cover object-contain bg-no-repeat bg-center w-full h-full"
                />
                <Image
                    loading="lazy"
                    className="absolute bg-[url('/404.png')] bg-contain bg-no-repeat bg-center transform rotate-90 sm:rotate-0 transition duration-500"
                    width={500}
                    height={300}
                />
                <Image
                    loading="lazy"
                    className="absolute bg-[url('/Big-Planet.png')] bg-contain bg-no-repeat bg-center mx-auto w-full translate-y-3/4  md:w-3/4 md:md:translate-y-[24rem] "
                    width={500}
                    height={500}
                />
            </div>
            <div className="min-h-screen inset-0 flex flex-col items-center justify-center fixed z-20">
                <h1 className='mt-10 text-2xl -translate-y-[18rem] md:text-4xl md:-translate-y-[10rem] pointer-events-none'>Page Not Found</h1>
                <Image
                    loading="lazy"
                    className="absolute bg-[url('/Astronaut.png')] bg-contain bg-no-repeat bg-center sm:translate-y-[2rem]"
                    width={500}
                    height={300}
                />
                <Link href="/" className='absolute z-10 bg-white text-black py-2 px-8 rounded-3xl translate-y-[16rem] translate-x-[2rem] md:translate-y-[11rem] md:-translate-x-[1rem]'>
                    Go Home
                </Link>
            </div>
        </>

    );
};

export default Background;
