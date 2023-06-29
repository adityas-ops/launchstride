import React from "react";
import "animate.css";
import Link from "next/link";

const data = [
    {
        id:1,
        title:"An expert guide to share option schemes",
        img:"/images/landingPage/cc1.png",
        but:"resources",
        min1:"7 min",
        min2:"27 jun"
    },
    {
        id:2,
        title:"Eleven Labs Raises $19m Series-A",
        img:"/images/landingPage/cc2.png",
        but:"Portfolio news",
        min1:"4 min",
        min2:"20 jun"
    },
    {
        id:3,
        title:"An expert guide to share option schemes",
        img:"/images/landingPage/cc3.png",
        but:"resources",
        min1:"6 min",
        min2:"1 jun"
    },
    
]

function Cards() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="container border-t border-zinc-300 md:pt-10 pt-5">
        <p className="text-[1.25rem] pb-[2.5rem] font-Mono">LATEST NEWS</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {
            data.map((item)=>(
                <>
                <Link href={`/${item.id}`}>
                <div className="flex flex-col items-center h-full card pb-10">
            <div className=" h-[240px] rounded-[10px] overflow-hidden  ">
              <div className="imge transition-all ease-in-out duration-500  overflow-auto object-cover">
                <img
                  src={item.img}
                  alt="ad"
                  className="w-[400px] object-cover h-[240px]"
                />
              </div>
            </div>
            <p className="mt-8 text-[1.25rem] font-Whyte text">
               {item.title}
              </p>
              <div className="flex justify-start  w-full mt-3 font-inter text-[0.875rem]">
               <p className="px-2 py-1 rounded-[20px] border border-zinc-300 ml-4 hover:bg-black hover:text-white">{item.but}</p>
               <p className="px-2 py-1 ml-4 border-r border-zinc-300" >{item.min1}</p>
               <p className="px-2 py-1">{item.min2}</p>
              </div>
          </div>
          </Link>
                </>
            ))
        }
        </div>
      </div>
    </div>
  );
}

export default Cards;
