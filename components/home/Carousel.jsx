// import React from 'react's
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import {BsArrowRight,BsArrowLeft} from "react-icons/bs"


const data = [
  {
    img:"/images/landingPage/c1.png",
    text:"As a serial founder who's worked with over 10 different funds, Concept really understood what was needed at pre-seed. And they didn't just stop after we graduated, and continue to support us at Series B and beyond.",
    name:"Jay Radia",
    pos:"CO-Founder",
    company:"REACHDESK",
    logo:"/images/landingPage/ReachDesk.png"
   
  },
  {
    img:"/images/landingPage/c2.png",
    text:"Concept have helped with everything from client introductions, to connecting us with next-round investors. They're personable, relatable and respond to all WhatsApps within an hour. Any founder would be lucky to have them onside.",
    name:"Jamie Beaumont",
    pos:"ceo",
    company:"Playter",
    logo:"/images/landingPage/playter.png"
  },
  {
    img:"/images/landingPage/c3.jpg",
    text:"Concept led our pre-seed and supported us through ups, downs as well as a hard pivot and successful acquisition - through which they were especially influential. Concept was undoubtably the best pre-seed investor on our cap-table and will be our first call when starting our next venture:",
    name:"Aayush Jain",
    pos:"CEO",
    company:"Cliff.ai",
    logo:"/images/landingPage/Cliff.png"
  },
  {
    img:"/images/landingPage/c4.png",
    text:"Concept believed in us when most VCs thought we were too early. They since introduced and helped us close a major client and were instrumental in our ability to secure our next round. They were the ideal partner throughout our first 18 months.",
    name:"Olga Dogadkina",
    pos:"CEO",
    company:"emperia",
    logo:"/images/landingPage/emperia.png"
  },
  {
    img:"/images/landingPage/c5.png",
    text:"Without Concept our next round simply would not be possible. They helped with drafting, editing and distributing materials, intro's, back-channelling of investors and ultimately their intro our next round lead.",
    name:"Anton Boner",
    pos:"Co-Founder",
    company:"screenloop",
    logo:"/images/landingPage/conden.png"
  }
]

function Carousel() {
  const [padd,setPadd] = useState("1rem")
  useEffect(() => {
    const handleResize = () => {
      // Adjust perPage based on screen size
      if (window.innerWidth < 768) {
  
        setPadd('1rem')
      } else {
        setPadd('4rem')
      }
    };
  
    // Set initial perPage value
    handleResize();
  
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
  
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="mt-[2rem] md:mb-[8rem] mb-[2.5rem] w-full h-full flex justify-center">
        <div className="pt-[1rem]  w-full h-full flex flex-col items-center">
       <div className='container w-full '>
       <p className='font-Mono text-[1.25rem]  container'>DON&apos;T TAKE OUR WORD FOR IT</p>
       </div>
       <div className='pt-[3rem] flex items-center justify-center relative w-full  h-full'>
       <div className='w-full h-full relative mt-16'>
       <Splide hasTrack={ false } aria-label="..."
       options={{
        padding:padd,
        type:"loop",
        pagination: false,
        
       }}
       >
  <SplideTrack>
       {
            data.map((item,index)=>{
              return(
                <>
                <SplideSlide key={index}>
        <div className='flex lg:flex-row items-center justify-center   flex-col border border-zinc-300 p-4 w-fit rounded-[10px] mx-4'>
        <div className='md:w-[80%] w-full  object-fill'>
            <img
            src={item.img}
            alt='he'
            className=' object-cover w-[500px] h-[400px] rounded-[10px]'
            />
        </div>
        <div className='w-full  p-4  flex justify-center'>
           <div className='w-[90%]'>
           <img
            src='/images/landingPage/quote.svg'
            alt='quote'
            className='w-[32px] h-[25px] mb-4'
            />
            <p className='text-[1.125rem] font-inter w-full'>{item.text}</p>
            <p className='mt-6 font-inter font-[600] '>{item.name}</p>
            <div className=' flex text-[14px] font-Mono uppercase'>
               <p className='p-1 border-r-[0.5px] border-zinc-300'>{item.pos}</p>
               <p className='p-1'>{item.company}</p>
            </div>
            <img
            src={item.logo}
            alt='quote'
            className='w-[100px] h-[60px] mt-4'
            />
           </div>
        </div>
        </div>
    </SplideSlide>

                </>
              )
            })
       }
  </SplideTrack>

<div className='absolute w-full top-[-8%] md:top-[-16%]  flex justify-end'>
  <div className="splide__arrows md:w-[10%] w-[40%] relative">
    <button className=" splide__arrow--prev   p-2 border border-zinc-300 cursor-pointer mx-1">
       <BsArrowRight className='text-xl font-[400]'/>
    </button>
    <button className="splide__arrow--next  p-2 border border-zinc-300 cursor-pointer mx-1">
    <BsArrowRight className='text-xl font-[400]'/>
    </button>
  </div>
  </div>
</Splide>
       </div>
       </div>
        </div>
        </div>
  )
}

export default Carousel