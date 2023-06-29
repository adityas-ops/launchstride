import React from "react";
import Hero from "./Hero";
import Image from "next/image";
import Reshape from "./Reshape";
import Carousel from "./Carousel";
import Cards from "./Cards";
import Link from "next/link";
import {IoClose} from "react-icons/io5"
import { useState } from "react";
const CardData = [
    {
        title:"Idea Generation",
        desc:"We continuously explore new opportunities and develop innovative ideas, utilizingour deep industry knowledge and market insights."
    },
    {
        title:"Validation",
        desc:"We conduct rigorous market research and feasibility analysis to ensure that our ideas possess the potential to disrupt industries, redefine markets, and scale exponentially."
    },
    {
        title:"Creation",
        desc:"We build talented and ambitious teams to create our startups, offering them strategic support, mentorship, and access to a robust network of resources, including funding, talent, and domain expertise."
    },
    {
        title:"Launch and Scale",
        desc:"Once a startup is ready to take flight, we work hand-in-hand with the team to help them navigate the challenges of growth, refine their business model, and secure strategic partnerships."
    }

]



const cookies = "By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our Privacy Policy for more information.";

function Landing() {
  const [isopen,setIsopen] = useState(true)
  return (
    <div className="relative">
      <Hero />
      <div className="w-full h-[5rem] border-y  border-zinc-300 ">
        {/* empty for mer */}
      </div>
      <div className="pt-[7.125rem] pb-[5rem] flex items-center justify-center text-center font-Whyte text-[1.5rem] text-black-primary ">
        <p className="md:w-[58%] w-[95%] text- leading-[2.5rem]">
          Welcome to Launchstride, the leading powerhouse of innovation,
          creativity, and entrepreneurship. We are a team of visionary thinkers,
          entrepreneurs, and industry experts who have come together to build an
          ecosystem that transforms ambitious ideas into thriving businesses.
        </p>
      </div>
      <div className=" object-fill w-full h-[80%] relative">
        <img
          src="/images/landingPage/Rectangle.png"
          alt="hero"
          className=" object-cover w-full h-[500px] lg:h-[750px] z-0 "
        />
        <img
          src="/images/landingPage/circle.png"
          alt="circle"
          className="absolute bottom-0 right-[10%] z-10"
        />
        <div className="absolute top-0 flex items-center justify-center z-20 w-full h-full flex-col">
          <p className="md:text-[4rem] text-[2rem] font-Whyte text-[#fff]">
            We partner with student founders
            <br />
            to build the next big thing
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%] pt-[1rem] md:pt-[2rem] ">
            <div className=" font-Whyte text-[1.25rem]  text-white">
              <p>
                We are changing the way students start their entrepreneurship
                journey.
              </p>
              <p className="md:pt-8 pt-2 w-[95%] ">
                At VentureStride, our goal is to build innovative startups that
                create value, ultimately contributing to the common good. Our
                growing portfolio of game changing startups are reimagining a
                new future and creating a true impact with the power of
                entrepreneurship
              </p>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4 mt-10 md:mt-0">
                <img
                  src="/images/landingPage/amazon.png"
                  alt="google"
                  width={200}
                  height={120}
                />
                <img
                  src="/images/landingPage/amazon.png"
                  alt="google"
                  width={200}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[5rem] w-full h-full flex justify-center">
            <div className="  md:w-[60%]  w-full">
                <p className="text-center font-Whyte font-[500] text-[2.25rem]"> Our approach</p>
                <div className="mt-[3.5rem] flex justify-center flex-col items-center">
                    {
                        
                        CardData.map((item,index)=>{
                                return(
                                    <div key={index} className="md:w-[830px] w-[90%] h-[250px] mb-[2.5rem] bg-white rounded-lg border  border-zinc-300 hover:border-blue px-[2rem] flex flex-col justify-center items-center" >
                        <p className=" font-Whyte md:text-[2.5rem] text-[1.5rem] text-blue w-full text-start">{item.title}</p>
                        <p className="md:text-[1.5rem] text-[1rem]  font-inter text-black-primary font-light">{item.desc}</p>
                    </div>
                                )
                        })
                    }
                </div>
            </div>
      </div>
      <Reshape/>
      <Carousel/>
      <Cards/>
     {
      isopen &&
      <div className="w-full h-[120px] z-50 bg-white fixed border-t border-zinc-300 bottom-0  flex justify-center">
                    <div className="container px-10 flex items-center justify-evenly">
                      <p className="w-[60%] font-inter">By clicking “<span className="font-bold">Accept All Cookies</span>”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our <Link className="text-blue underline" href="">Privacy Policy</Link> for more information.</p>
                      <div className="grid grid-cols-4 font-mono gap-4">
                        <Link href="#" className="text-blue underline text-[1.125rem] py-2">
                          Preference
                        </Link>
                        <button className="py-2 px-12 rounded-[20px] border border-blue hover:bg-blue hover:text-white">
                          DENY
                        </button>
                        <button className="py-2 px-12 rounded-[20px] border border-blue hover:bg-blue hover:text-white  text-center flex justify-center items-center">
                        ACCEPTS
                        </button>
                        <button className="p-1 bg-zinc-400 text-white w-fit rounded-[50%]" onClick={()=>{
                              setIsopen(false)
                        }}>
                        <IoClose className="text-4xl font-bold"/>
                        </button>
                      </div>
                    </div>
      </div>
     }
    </div>
  );
}

export default Landing;
