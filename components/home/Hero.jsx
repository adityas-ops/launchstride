import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='w-full h-full flex justify-center'>
        <div className=' sm:px-8 px-3   py-[3.125rem] grid grid-cols-1 md:grid-cols-2'>
            <div className=' md:order-1 order-2 flex flex-col items-start justify-center pt-5 md:pt-0 '>
           <div className='flex flex-col w-[80%]  justify-center items-center'>
           <h2 className='text-[3rem] tracking-[-2.4px] font-Whyte text-black-primary text-center md:text-start md:w-[75%] w-full '>
            Powering student
          <br/>   entrepreneurship
            </h2>
            <p className='text-[1.25rem] font-inter text-black-primary leading-[2.5rem] md:w-[75%] text-center md:text-start'>
            Launchstride collaborates and builds startups 
together with exceptional students who have 
entrepreneurial spirit
            </p>
           </div>
            </div>
            <div className='md:order-2 order-1'>
                <Image
                    src="/images/landingPage/Rectangle1.png"
                    alt="hero"
                    width={640}
                    height={620}
                    />
            </div>
        </div>
    </div>
  )
}

export default Hero