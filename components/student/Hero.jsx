import React from 'react'

function Hero({title1,title2}) {
  return (
    <>
        <div className='w-full h-full'>
            <div className='w-full h-[600px] relative '>
            <img
            src="/images/landingPage/Rectangle.png"
            alt="hero"
            className='w-full h-full'
            />
            <div className='absolute top-0 w-full h-full z-10 flex items-center justify-center '>
                <p className='md:text-[4rem] text-[2.5rem] font-sans font-[700]  text-[#fff] px-4 md:px-0'>{title1}
                 <br/>{title2} </p>
            </div>
        </div>
        </div>
    </>
  )
}

export default Hero