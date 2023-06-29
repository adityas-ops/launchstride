import React from 'react'


const data  = [
    {
        title:"Founders first",
        desc:"We obsess about making our founders successful"
    },
    {
        title:"Build our people",
        desc:"By developing each other, we build leaders that define the future"
    },
    {
        title:"100% ownership",
        desc:"No excuses—own up and get it done"
    },
    {
        title:"Best idea wins",
        desc:"We are a meritocracy—the idea matters, not who had it"
    },
    {
        title:"Don't tread water",
        desc:"Move fast and deliver high-quality results"
    },
    {
        title:"Disagree and commit",
        desc:"We can debate fiercely—but when the decision is made, we commit and execute"
    },
    {
        title:"Uncomfortably ambitious",
        desc:"We set improbable goals and meet them"
    },
    {
        title:"Do more with less",
        desc:"Any cent spent is spent on the right thing"
    },
    {
        title:"Give back",
        desc:"It’s not a zero-sum game—when all give back, all receive more"
    }
]

function Guides() {
  return (
    <>
        <div className='w-full h-full flex justify-center'>
            <div className='container h-full w-full  flex  flex-col items-center'>
            <p className='text-start w-full pl-8 text-[2rem] pb-[2rem]'>THE PRINCIPLES THAT GUIDE US</p>
                <div className='grid md:grid-cols-3 grid-cols-1 w-[90%] gap-4'>
                    {
                            data.map((item,index)=>{
                                return(
                                    <>
                                        <div key={index} className='border-l border-black pl-8 py-2 my-10'>
                                        <p className='text-[1.5rem] font-[400] font-inter'>{item.title}</p>
                                        <p className='text-[1rem] font-[300] py-[1.75rem]'>{item.desc}</p>
                                        </div>
                                    </>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Guides