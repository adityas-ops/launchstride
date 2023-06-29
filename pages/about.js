import Guides from '@/components/about/Guides'
import Hero from '@/components/student/Hero'
import React from 'react'

function about() {
  return (
   <>
    <Hero title1={"We know how difficult it is to be a"} title2={"student entrepreneur"}/>
    <div className='flex w-full h-full items-center flex-col py-[5rem]'>
        <p className='text-[1.25rem] font-inter text-black-8 md:w-[40%] w-[90%] leading-[2rem]'>Launchstride is started with an aim to support the next generation of student founders in turning bold ideas into game changing startups.</p>
        <p className='text-[1.25rem] font-inter text-black-8 md:w-[40%] w-[90%] leading-[2rem] pt-[3rem]'>
        We partner with exceptional students with entrepreneurial mindset to build startups from scratch with unique entrepreneurial execution.
        </p>
    </div>
    <Guides/>
    <div className='pt-[2rem]'>
    <div className="w-full h-full flex flex-col items-center py-[5rem] ">
          <p className="text-[2rem] font-Whyte  text-center">
          We ease the pathway to{" "}
            <span className="text-blue italic">entrepreneurship</span>
          </p>
          <p className="pt-[1.625rem] text-[1.25rem] font-inter md:w-[50%] w-[90%]  ">
            so that more students with exceptional leadership skills across the
            world can start working towards the ideas aimed at building the next
            big thing
          </p>
        </div>
    </div>
   </>
  )
}

export default about