"use client";
import React, { useEffect, useState } from "react";
import CustomSvg from "./CustomSvg";
import Layout from "./Layout";
import Insta from "./Insta";
import Colony from "./Colony";
import TwentyFour from "./TwentyFour";
import About from "./About";
import GroupPic from "./GroupPic";
import Image from "next/image";
import Works from "./Works";
interface HeroProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Hero({ open, setOpen }: HeroProps) {
  const [layout, setLayout] = useState<number>(1);
  return (
    <>
      {layout === 1 ? (
        <div>
          <div className="flex justify-between">
            <div className="w-[45vw] mt-10 md:mt-0 md:w-[28.5vw] h-[20vw] lg:h-[18vw] ml-8 lg:ml-6">
              <CustomSvg />
            </div>
            <div className="mr-10 mt-6 font-semibold text-2xl underline lg:hidden">
              <p
                className="cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
              >
                Menu
              </p>
            </div>
            <div className="mr-10 mt-3 s font-semibold text-[2vw] underline  hidden gap-[3.5vw] lg:flex">
              <p>About</p>
              <p>Work</p>
              <p>Journal</p>
              <p>Contact</p>
            </div>
          </div>

          <Works layout={layout} />
          <div className=" hidden lg:flex justify-center items-center gap-6 absolute text-[0.7vw] right-[31vw] top-[15vw]">
            <Layout layout={layout} setLayout={setLayout} />
          </div>

          <div className=" mt-14 grid-cols-5 lg:hidden hidden md:grid">
            <About />
            <TwentyFour />
            <Colony />
            <Insta />
          </div>

          <div className="md:hidden lg:flex flex-col  relative md:top-96 xl:top-20 md:left-60 gap-20 xl:gap-32 md:w-[30vw]  mt-3 md:mt-0 flex justify-center items-start">
            <About />
            <div className="flex items-center ml-8">
              <TwentyFour />
              <Colony />
              <Insta />
            </div>
          </div>

          <div className="lg:w-2/3 w-full h-[50vh] mt-32 lg:h-[30vh]  xl:h-[40vh] lg:absolute lg:right-0 lg:bottom-0">
            <GroupPic />
          </div>
        </div>
      ) : (
        <>
          <div className="lg:hidden">
            <div className="flex justify-between">
              <div className="w-[28.5vw] h-[20vw] lg:h-[18vw] relative left-[50vw] lg:ml-6">
                <CustomSvg />
              </div>
              <div className="mr-10 mt-6 font-semibold text-2xl underline lg:hidden">
                Menu
              </div>
              <div className="mr-10 mt-3 s font-semibold text-[2vw] underline  hidden gap-[3.5vw] lg:flex">
                <p>About</p>
                <p>Work</p>
                <p>Journal</p>
                <p>Contact</p>
              </div>
            </div>

            <Works layout={layout} />
            <div className=" hidden lg:flex justify-center items-center gap-6 absolute text-[0.7vw] right-[31vw] top-[15vw]">
              <Layout layout={layout} setLayout={setLayout} />
            </div>

            <div className="grid mt-14 grid-cols-5 lg:hidden">
              <About />
              <TwentyFour />
              <Colony />
              <Insta />
            </div>

            <div className="hidden lg:flex flex-col  relative top-96 xl:top-20 left-60 gap-20 xl:gap-32 w-[30vw]">
              <About />
              <div className="flex items-center">
                <TwentyFour />
                <Colony />
                <Insta />
              </div>
            </div>

            <div className="lg:w-2/3 w-full h-[50vh] mt-32 lg:h-[30vh]  xl:h-[40vh] lg:absolute lg:right-0 lg:bottom-0">
              <GroupPic />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex justify-between">
              <div className="w-96 m-8">
                <About />
                <div className=" hidden lg:flex justify-start items-center gap-6 mt-10   text-[0.7vw] ">
                  <Layout layout={layout} setLayout={setLayout} />
                </div>
              </div>
              <div className="flex">
                <div className="w-[28.5vw] h-[20vw] lg:h-[18vw] ml-8 lg:mr-8">
                  <CustomSvg />
                </div>
                <div>
                  <div className="flex flex-col items-start gap-5 ">
                    <div className="mr-8 mt-3  font-semibold text-[2vw] underline  hidden  lg:flex lg:flex-col">
                      <p>About</p>
                      <p>Work</p>
                      <p>Journal</p>
                      <p>Contact</p>
                    </div>
                    <TwentyFour />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Works layout={layout} />
            </div>
            <div>
              <div className="w-[25vw] h-[25vw] mt-[30vh] xl:mt-0 ml-56">
                <GroupPic />
              </div>
            </div>
            <div className="absolute bottom-10 flex flex-col gap-20 right-10">
              <Insta />
              <Colony />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Hero;
