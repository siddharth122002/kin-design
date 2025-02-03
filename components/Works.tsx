import Image from "next/image";
import React from "react";

function Works({ layout }: { layout: number }) {
  return (
    <>
      {layout === 1 ? (
        <div className="hidden lg:flex lg:flex-col w-36 absolute bottom-0 text-xs">
          <p className="mb-16 m-6 text-gray-400">Featured works</p>

          <div className="flex">
            <div className="w-28 h-32 relative ">
              <Image
                src={
                  "https://by-kin.com/_next/image?url=https%3A%2F%2Fcms.by-kin.com%2Fuploads%2F01_7f51214472.jpg&w=1920&q=100"
                }
                fill
                className="w-full p-5 h-full object-contain"
                alt="somethign"
              />
            </div>
            <p className="mt-9">01</p>
          </div>
          <div className="flex">
            <div className="w-28 h-32 relative ">
              <Image
                src={
                  "https://by-kin.com/_next/image?url=https%3A%2F%2Fcms.by-kin.com%2Fuploads%2F1_95b3d86a0c.jpg&w=1920&q=100"
                }
                fill
                className="w-full p-5 h-full object-contain"
                alt="somethign"
              />
            </div>
            <p className="mt-9">02</p>
          </div>
          <div className="flex">
            <div className="w-28 h-32 relative ">
              <Image
                src={
                  "https://by-kin.com/_next/image?url=https%3A%2F%2Fcms.by-kin.com%2Fuploads%2FDSC_7621_3_min_0e0ee18881.jpg&w=1920&q=100"
                }
                fill
                className="w-full p-5 h-full object-contain"
                alt="somethign"
              />
            </div>
            <p className="mt-9">03</p>
          </div>
        </div>
      ) : (
        <div className="hidden lg:flex lg:flex-col w-36 absolute bottom-0 text-xs">
          <p className="mb-16 m-6 text-gray-400">Featured works</p>
          <div className="flex">
            <div className="flex flex-col">
              <p className="mt-9 ml-5">01</p>
              <div className="w-12 h-12 relative flex flex-col bg-red-800 m-5">
                <Image
                  src={
                    "https://by-kin.com/_next/image?url=https%3A%2F%2Fcms.by-kin.com%2Fuploads%2F01_7f51214472.jpg&w=1920&q=100"
                  }
                  fill
                  className="w-full h-full object-cover"
                  alt="somethign"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="mt-9 ml-5">02</p>
              <div className="w-12 h-12 relative flex flex-col bg-red-800 m-5">
                <Image
                  src={
                    "https://by-kin.com/_next/image?url=https%3A%2F%2Fcms.by-kin.com%2Fuploads%2F1_95b3d86a0c.jpg&w=1920&q=100"
                  }
                  fill
                  className="w-full h-full object-cover"
                  alt="somethign"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="mt-9 ml-5">03</p>
              <div className="w-12 h-12 relative flex flex-col bg-red-800 m-5">
                <Image
                  src={
                    "https://by-kin.com/_next/image?url=https%3A%2F%2Fcms.by-kin.com%2Fuploads%2FDSC_7621_3_min_0e0ee18881.jpg&w=1920&q=100"
                  }
                  fill
                  className="w-full h-full object-cover"
                  alt="somethign"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Works;
