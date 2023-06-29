import Link from "next/link";
import React from "react";
import { PiArrowUpRightLight } from "react-icons/pi";
function Reshape() {
  const data = [
    {
      small:
        "https://uploads-ssl.webflow.com/62bed0ddd092e0137a3c12f6/62c46a58a5995dd67f1bca8c_arrow_small_work.svg",
      title: "WORK",
      color: "#FDD94C",
    },
    {
      small:
        "https://uploads-ssl.webflow.com/62bed0ddd092e0137a3c12f6/62c46a587fc6a7f244b7dd70_arrow_small_entertainment.svg",
      title: "PLAY",
      color: "#F291F4",
    },
    {
      small:
        "https://uploads-ssl.webflow.com/62bed0ddd092e0137a3c12f6/62c46a586073de2ffb644d0c_arrow_small_education.svg",
      title: "LEARN",
      color: "#7EE398",
    },
  ];
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <div className="mt-[2rem] w-full h-full flex justify-center">
        <div className="pt-[3rem] border-t w-full container  h-full">
          <p className=" font-Mono text-[1.25rem]">
            WHICH WORLD ARE YOU RESHAPING?
          </p>
          <div className="w-full h-full pt-[3rem]">
            {data.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className={` w-full h-fit border-b border-zinc-300 mt-6`}
                  >
                    <Link
                      href="#"
                      className={`
                        flex
                        items-start
                        justify-between
                        hover:bg-[${item.color}]
                        h-fit
                        man
                        p-4
                        rounded-[10px]
                        mb-6
                        ${isHovered && 
                          `bg-[${item.color}]`
                        }
                      }`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <p className=" font-Whyte md:text-[8rem] text-[6rem] p-0 mt-14 leading-[80px]">
                        {item.title}
                      </p>
                      <div className="group w-full h-full relative">
                        <img
                          src={item.small}
                          alt="Image 1"
                          className="small transition duration-300 ease-in-out opacity-100  absolute top-0 right-0"
                        />
                        <img
                          src="https://uploads-ssl.webflow.com/62bed0ddd092e0137a3c12f6/62cc48afee820677aa3b2be9_journey_arrow_large.svg"
                          alt="Image 2"
                          className="large transition duration-300 ease-in-out opacity-0  absolute top-0 right-0 "
                        />
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reshape;
