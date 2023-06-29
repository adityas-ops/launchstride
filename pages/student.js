import Hero from "@/components/student/Hero";
import React from "react";

const data = [
  {
    id: 1,
    title: "Lack of Mentorship",
    desc: "You may have a great product or idea, but lack the necessary guidance, market experience or knowledge to take it to the next level",
  },
  {
    id: 2,
    title: "Knowledge and skills gap",
    desc: "It’s unlikely that you know everything there is to know about running a startup as a first-time student entrepreneur",
  },
  {
    id: 3,
    title: "Your comfort zone",
    desc: "Growing a startup can feel like taking one step backwards for every two steps forward. It takes grit. At the beginning, you’re going to need to wear a lot of different hats (metaphorically speaking, at least).",
  },
  {
    id: 4,
    title: "Passionate Co-founders",
    desc: "Finding a Co-founder who can complement your skills, is equally passionate and committed about taking the idea from nothing to a successful venture can be challenging",
  },
  {
    id: 5,
    title: "Lack of funding and resources",
    desc: "College students don&apos;t have the resources and money  to fund & support the initial product/prototype development and the early stages of venture development",
  },
];

function student() {
  return (
    <>
      <Hero title1={"We know how difficult it is to be a"} title2={"student entrepreneur"} />
      <div className="w-full flex justify-center py-[5.625rem]">
        <p className="text-[1.25rem] font-inter text-black-8 text-center md:w-[50%] w-[90%]">
          According to research, approximately 20% of new businesses fail in
          their first year and 50% after five years. While most founders know
          from the onset that there will be obstacles, it is different for
          student startups.
        </p>
      </div>
      <div className="w-full h-[60px] border-y border-zinc-300 ">{/*  */}</div>
      <div className="pt-[7.25rem] w-full flex justify-center">
        <p className="text-[1.5rem] text-blue font-Whyte text-center md:w-[40%] w-[90%]">
          As an aspiring Student Entrepreneur, are any of the following
          challenges familiar to you?
        </p>
      </div>
      <div className="pt-[4rem] w-full h-full flex justify-center">
        <div className="container grid md:grid-cols-2 grid-col-1 border border-zinc-300 px-[3rem] py-[5rem]">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col justify-center p-6">
              <p className="text-[1rem] font-Whyte text-blue">0{item.id}</p>
              <p className="text-[1.5rem] text-black font-Whyte pt-[0.5rem]">
                {item.title}
              </p>
              <p className="pt-[1rem] text-black-8 text-[1.125rem] font-inter">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    
      <div className=" w-full flex justify-center">
        <div className="container w-full flex flex-col justify-center items-center">
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
        <div className="w-full h-full flex flex-col items-center py-[5rem] border-t border-zinc-300">
        
          <p className="text-[2rem] font-Whyte text-center">
          Interested in becoming a{" "}
            <span className="text-blue italic">Co-founder?</span>
          </p>
          <p className="pt-[1.625rem] text-[1.25rem] font-inter md:w-[50%] w-[90%]  ">
          All we need from you is your vision and commitment to build the next big thing.
Along the way, we will help you validate your idea, build an MVP, and iterate towards
reaching product-market fit.
          </p>
        </div>
        </div>
      </div>
      </>
      
  );
}

export default student;
