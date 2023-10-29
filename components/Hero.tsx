import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
  <section className="max-container padding-container flex flex-col gap-20 py-10
  pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500">
    <div className='hero-map' />

    <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
      <Image
        src="/camp.svg"
        alt="camp"
        width={50}
        height={50}
        className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
      />
      <h1 className="bold-52 lg:bold-88">Camping en zone de Montagne</h1>
      <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        et
      </p>
      <div className="my-11 flex-wrap gap-5">
        <div className="flex items-center gap-2"></div>
      </div>
    </div>
  </section>
  )
}

export default Hero