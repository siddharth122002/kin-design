"use client";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const images = [
    "https://by-kin.com/_next/image?url=https%3A%2F%2Fcms.by-kin.com%2Fuploads%2F01_7f51214472.jpg&w=1920&q=100",
    "https://by-kin.com/_next/image?url=https%3A%2F%2Fcms.by-kin.com%2Fuploads%2FAT_9_33aacb26d6.jpg&w=1920&q=100",
    "https://by-kin.com/_next/image?url=https%3A%2F%2Fcms.by-kin.com%2Fuploads%2F1_95b3d86a0c.jpg&w=1920&q=100",
    "https://by-kin.com/_next/image?url=https%3A%2F%2Fcms.by-kin.com%2Fuploads%2FDSC_7621_3_min_0e0ee18881.jpg&w=1920&q=100",
    "https://by-kin.com/_next/image?url=https%3A%2F%2Fcms.by-kin.com%2Fuploads%2FMP_3_1303_min_aeac42f2a3.jpg&w=1920&q=100",
    "https://by-kin.com/_next/image?url=https%3A%2F%2Fcms.by-kin.com%2Fuploads%2F30_fa739f68cf.jpg&w=1920&q=100",
    "https://by-kin.com/_next/image?url=https%3A%2F%2Fcms.by-kin.com%2Fuploads%2FDentons_13_9dc4515e40.jpg&w=1920&q=100",
  ];
  useGSAP(
    () => {
      if (open) {
        gsap.to(menuRef.current, {
          x: "0%",
          duration: 1,
        });
      } else {
        gsap.to(menuRef.current, {
          x: "100%",
          duration: 1,
        });
      }
    },
    { dependencies: [open] }
  );
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(".loading", {
        display: "none",
        duration: 2,
      });
      tl.to(
        ".opener1",
        {
          display: "none",
          translateY: "-50%",
          duration: 1,
        },
        "a"
      );
      tl.to(
        ".opener2",
        {
          // display: "none",
          translateY: "100%",
          duration: 1,
        },
        "a"
      );
      tl.to(
        ".stag6",
        {
          scale: 1,
          duration: 1.3,
        },
        "a"
      ).to(
        ".stag6",
        {
          // opacity: 0,
          display: "none",
          delay: 0.9,
          duration: 0.7,
        },
        "a"
      );

      tl.to(".stag5", {
        scale: 1,
        // opacity: 0,
        display: "none",
        duration: 0.36,
      });
      tl.to(".stag4", {
        scale: 1,
        // opacity: 0,
        display: "none",
        duration: 0.3,
      });
      tl.to(".stag3", {
        scale: 1,
        // opacity: 0,
        display: "none",
        duration: 0.29,
      });
      tl.to(".stag2", {
        scale: 1,
        // opacity: 0,
        display: "none",
        duration: 0.25,
      });
      tl.to(".stag1", {
        scale: 1,
        // opacity: 0,
        display: "none",
        duration: 0.23,
      });
      tl.to(".stag0", {
        scale: 1,
        // opacity: 0,
        display: "none",
        delay: 0.1,
        duration: 0.4,
      });
      tl.to(".nn", {
        display: "none",
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );
  return (
    <>
      <div className="bg-[#F4F2ED] transition-all duration-1000 w-full h-screen relative overflow-hidden">
        {/* loader */}
        <div className="absolute nn top-0 left-0 z-50 w-full h-full">
          <div className="stag0  absolute top-0 left-0 scale-125 w-full h-full">
            <Image src={images[0]} className=" object-cover" fill alt="test" />
          </div>
          <div className="stag1  absolute top-0 left-0 scale-125 w-full h-full">
            <Image src={images[1]} className=" object-cover" fill alt="test" />
          </div>
          <div className="stag2  absolute top-0 left-0 scale-125 w-full h-full">
            <Image src={images[2]} className=" object-cover" fill alt="test" />
          </div>
          <div className="stag3  absolute top-0 left-0 scale-125 w-full h-full">
            <Image src={images[3]} className=" object-cover" fill alt="test" />
          </div>
          <div className="stag4  absolute top-0 left-0 scale-125 w-full h-full">
            <Image src={images[4]} className=" object-cover" fill alt="test" />
          </div>
          <div className="stag5 absolute top-0 left-0 scale-125 w-full h-full">
            <Image src={images[5]} className=" object-cover" fill alt="test" />
          </div>
          <div className="stag6 absolute top-0 left-0 scale-125 w-full h-full">
            <Image src={images[6]} className=" object-cover" fill alt="test" />
          </div>
          <div className="opener1 absolute top-0 left-0 bg-[#F4F2ED] w-full h-full -translate-y-[50%]"></div>
          <div className="opener2 absolute top-0 left-0 bg-[#F4F2ED] w-full h-full translate-y-[49%]"></div>
          <div className="loading flex justify-center items-center w-full h-screen absolute top-0 left-0 z-50 text-[#FF6542]">
            Loading...
          </div>
        </div>

        <div
          className="absolute translate-x-[100%] top-0 left-0 w-full z-10"
          ref={menuRef}
        >
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Hero open={open} setOpen={setOpen} />
      </div>
    </>
  );
}
